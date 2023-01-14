"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoInfoFetchError = exports.NotADirectoryError = void 0;
class BaseError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}
class NotADirectoryError extends BaseError {
    constructor(message) {
        super(message);
    }
}
exports.NotADirectoryError = NotADirectoryError;
class VideoInfoFetchError extends BaseError {
    constructor(message) {
        super(message);
    }
}
exports.VideoInfoFetchError = VideoInfoFetchError;
//# sourceMappingURL=exceptions.js.map