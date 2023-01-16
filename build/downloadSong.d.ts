import ytdl from 'ytdl-core';
import { Bitrates } from './convertVideoToAudio';
import { Filepaths } from './getFilepaths';
interface Options {
    outputDir?: string;
    getTags?: boolean;
    tryTags?: boolean;
    verifyTags?: boolean;
    renameFile?: boolean;
    bitrate?: Bitrates;
}
interface DownloadSong {
    filepaths: Filepaths;
    videoInfo?: ytdl.videoInfo;
}
export default function downloadSong(url: string, options?: Options): Promise<DownloadSong>;
export {};
