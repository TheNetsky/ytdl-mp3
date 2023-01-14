"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const ytdl_core_1 = require("ytdl-core");
function downloadVideo(videoInfo, outputFile) {
    const stream = (0, ytdl_core_1.downloadFromInfo)(videoInfo, { quality: 'highestaudio' }).pipe(fs_1.default.createWriteStream(outputFile));
    return new Promise((resolve, reject) => {
        stream.on('finish', resolve);
        stream.on('error', (err) => {
            reject(err);
        });
    });
}
exports.default = downloadVideo;
//# sourceMappingURL=downloadVideo.js.map