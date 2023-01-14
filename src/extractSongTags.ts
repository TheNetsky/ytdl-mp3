import type { videoInfo as VideoInfo } from 'ytdl-core';

import fetchAlbumArt from './fetchAlbumArt';
import fetchSearchResults from './fetchSearchResults';
import verifySearchResult from './verifySearchResult';

import { removeParenthesizedText } from './utils';

interface AlbumArt {
  mime: string;
  type: {
    id: number;
    name: string;
  };
  description: string;
  imageBuffer: Buffer;
}

interface SongTags {
  title: string;
  artist: string;
  image: AlbumArt;
}

export default async function extractSongTags(
  videoInfo: VideoInfo,
  verify?: boolean
): Promise<SongTags | Error> {
  const searchTerm = removeParenthesizedText(videoInfo.videoDetails.title);
  const results = await fetchSearchResults(searchTerm);

  if (results instanceof Error) {
    return results;
  }

  let result = results[0];
  if (verify) {
    for (result of results) {
      if (await verifySearchResult(result)) {
        break;
      }
    }
  }

  const artworkUrl = result.artworkUrl100.replace(
    '100x100bb.jpg',
    '600x600bb.jpg'
  );
  const albumArt = await fetchAlbumArt(artworkUrl);

  return {
    title: result.trackName,
    artist: result.artistName,
    image: {
      mime: 'image/png',
      type: {
        id: 3,
        name: 'front cover',
      },
      description: 'Album Art',
      imageBuffer: albumArt,
    },
  };
}
