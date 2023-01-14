import fs from 'fs';
import path from 'path';

import { removeParenthesizedText } from './utils';

export interface Filepaths {
  baseFileName: string;
  audioFile: string;
  videoFile: string;
}

export default function getFilepaths(
  title: string,
  outputDir: string
): Filepaths {
  const baseFileName = removeParenthesizedText(title)
    .replace(/[^a-z0-9]/gi, '_')
    .split('_')
    .filter((element) => element)
    .join('_')
    .toLowerCase();

  const filepaths = {
    baseFileName,
    audioFile: path.join(outputDir, baseFileName + '.mp3'),
    videoFile: path.join(outputDir, baseFileName + '.mp4')
  };

  Object.values(filepaths).forEach((file) => {
    if (fs.existsSync(file)) {
      fs.rmSync(file);
    }
  });

  return filepaths;
}
