"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function fetchAlbumArt(url) {
    return axios_1.default
        .get(url, { responseType: 'arraybuffer' })
        .then((response) => response.data)
        .catch(() => {
        throw new Error('Failed to fetch album art from endpoint: ' + url);
    });
}
exports.default = fetchAlbumArt;
//# sourceMappingURL=fetchAlbumArt.js.map