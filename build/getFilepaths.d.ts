export interface Filepaths {
    baseFileName: string;
    audioFile: string;
    videoFile: string;
}
export default function getFilepaths(title: string, outputDir: string): Filepaths;
