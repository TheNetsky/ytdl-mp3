/// <reference types="node" />
import type { videoInfo as VideoInfo } from 'ytdl-core';
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
export default function extractSongTags(videoInfo: VideoInfo, verify?: boolean): Promise<SongTags | Error>;
export {};
