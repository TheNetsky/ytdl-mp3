import NodeID3 from 'node-id3';
import ytdl from 'ytdl-core';

import { NotADirectoryError, VideoInfoFetchError } from './exceptions';
import { getDownloadsDir, isDirectory } from './utils';

import convertVideoToAudio from './convertVideoToAudio';
import downloadVideo from './downloadVideo';
import extractSongTags from './extractSongTags';
import getFilepaths, { Filepaths } from './getFilepaths';
import renameFile from './renameFile';

interface Options {
  outputDir?: string;
  getTags?: boolean;
  tryTags?: boolean;
  verifyTags?: boolean;
  renameFile?: boolean;
}

interface DownloadSong {
  filepaths: Filepaths;
  videoInfo?: ytdl.videoInfo;
}

export default async function downloadSong(url: string, options?: Options): Promise<DownloadSong> {
  if (options?.outputDir && !isDirectory(options.outputDir)) {
    throw new NotADirectoryError(options.outputDir);
  }
  const videoInfo = await ytdl.getInfo(url).catch(() => {
    throw new VideoInfoFetchError(
      'Unable to fetch info for video with URL: ' + url
    );
  });

  const filepaths = getFilepaths(videoInfo.videoDetails.title, options?.outputDir || getDownloadsDir());

  await downloadVideo(videoInfo, filepaths.videoFile);
  convertVideoToAudio(filepaths.videoFile, filepaths.audioFile);

  if (options?.getTags || options?.tryTags) {
    const songTags = await extractSongTags(videoInfo, options.verifyTags);

    if (songTags instanceof Error) {
      if (options?.getTags) {
        throw new Error(songTags as any);
      }
    } else {
      NodeID3.write(songTags, filepaths.audioFile);
    }
  }

  if (options?.renameFile) {
    renameFile(filepaths, videoInfo.videoDetails.title);
  }
  
  return { filepaths, videoInfo };
}
