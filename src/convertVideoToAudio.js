"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = __importDefault(require("child_process"));
const fs_1 = __importDefault(require("fs"));
const ffmpeg_static_1 = __importDefault(require("ffmpeg-static"));
function convertVideoToAudio(inputFile, outputFile) {
    if (!fs_1.default.existsSync(inputFile)) {
        throw new Error('Input file does not exist: ' + inputFile);
    }
    child_process_1.default.execSync(`${ffmpeg_static_1.default} -loglevel 24 -i ${inputFile} -vn -sn -c:a mp3 -ab 192k ${outputFile}`);
    fs_1.default.rmSync(inputFile);
}
exports.default = convertVideoToAudio;
//# sourceMappingURL=convertVideoToAudio.js.map