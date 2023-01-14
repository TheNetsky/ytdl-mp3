"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetchAlbumArt_1 = __importDefault(require("./fetchAlbumArt"));
const fetchSearchResults_1 = __importDefault(require("./fetchSearchResults"));
const verifySearchResult_1 = __importDefault(require("./verifySearchResult"));
const utils_1 = require("./utils");
function extractSongTags(videoInfo, verify) {
    return __awaiter(this, void 0, void 0, function* () {
        const searchTerm = (0, utils_1.removeParenthesizedText)(videoInfo.videoDetails.title);
        const results = yield (0, fetchSearchResults_1.default)(searchTerm);
        if (results instanceof Error) {
            return results;
        }
        let result = results[0];
        if (verify) {
            for (result of results) {
                if (yield (0, verifySearchResult_1.default)(result)) {
                    break;
                }
            }
        }
        const artworkUrl = result.artworkUrl100.replace('100x100bb.jpg', '600x600bb.jpg');
        const albumArt = yield (0, fetchAlbumArt_1.default)(artworkUrl);
        return {
            title: result.trackName,
            artist: result.artistName,
            image: {
                mime: 'image/png',
                type: {
                    id: 3,
                    name: 'front cover',
                },
                description: 'Album Art',
                imageBuffer: albumArt,
            },
        };
    });
}
exports.default = extractSongTags;
//# sourceMappingURL=extractSongTags.js.map