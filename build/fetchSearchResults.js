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
const axios_1 = __importDefault(require("axios"));
function fetchSearchResults(searchTerm) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = new URL('https://itunes.apple.com/search?');
        url.searchParams.set('media', 'music');
        url.searchParams.set('term', searchTerm);
        try {
            const response = yield axios_1.default.get(url.href);
            if (response.data.resultCount === 0) {
                return new Error('Call to iTunes API did not return any results');
            }
            return response.data.results;
        }
        catch (error) {
            return new Error(error);
        }
    });
}
exports.default = fetchSearchResults;
//# sourceMappingURL=fetchSearchResults.js.map