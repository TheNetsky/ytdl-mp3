import fs from 'fs';

import { Filepaths } from './getFilepaths';

export default function renameFile(filepaths: Filepaths, title: string): string {
  const newFileName: string = filepaths.audioFile.replace(filepaths.baseFileName, title);

  fs.rename(filepaths.audioFile, newFileName, function (error) {
    if (error) throw new Error(error as any);
  });

  return newFileName;
}