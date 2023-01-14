import ytdl from 'ytdl-core';
import { Filepaths } from './getFilepaths';
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
export default function downloadSong(url: string, options?: Options): Promise<DownloadSong>;
export {};
