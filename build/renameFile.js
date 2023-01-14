"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function renameFile(filepaths, title) {
    const newFileName = filepaths.audioFile.replace(filepaths.baseFileName, title);
    fs_1.default.rename(filepaths.audioFile, newFileName, function (error) {
        if (error)
            throw new Error(error);
    });
    return newFileName;
}
exports.default = renameFile;
//# sourceMappingURL=renameFile.js.map