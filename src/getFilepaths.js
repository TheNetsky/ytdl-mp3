"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const utils_1 = require("./utils");
function getFilepaths(title, outputDir) {
    const baseFileName = (0, utils_1.removeParenthesizedText)(title)
        .replace(/[^a-z0-9]/gi, '_')
        .split('_')
        .filter((element) => element)
        .join('_')
        .toLowerCase();
    const filepaths = {
        baseFileName,
        audioFile: path_1.default.join(outputDir, baseFileName + '.mp3'),
        videoFile: path_1.default.join(outputDir, baseFileName + '.mp4')
    };
    Object.values(filepaths).forEach((file) => {
        if (fs_1.default.existsSync(file)) {
            fs_1.default.rmSync(file);
        }
    });
    return filepaths;
}
exports.default = getFilepaths;
//# sourceMappingURL=getFilepaths.js.map