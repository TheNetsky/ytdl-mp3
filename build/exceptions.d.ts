declare class BaseError extends Error {
    constructor(message: string);
}
export declare class NotADirectoryError extends BaseError {
    constructor(message: string);
}
export declare class VideoInfoFetchError extends BaseError {
    constructor(message: string);
}
export {};
