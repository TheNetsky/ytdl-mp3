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
exports.userInput = exports.isDirectory = exports.removeParenthesizedText = exports.getDownloadsDir = void 0;
const readline_1 = __importDefault(require("readline"));
const fs_1 = __importDefault(require("fs"));
const os_1 = __importDefault(require("os"));
const path_1 = __importDefault(require("path"));
function getDownloadsDir() {
    return path_1.default.join(os_1.default.homedir(), 'Downloads');
}
exports.getDownloadsDir = getDownloadsDir;
function removeParenthesizedText(s) {
    return s.replace(/\s*[([].*?[)\]]\s*/g, '');
}
exports.removeParenthesizedText = removeParenthesizedText;
function isDirectory(dirPath) {
    return fs_1.default.existsSync(dirPath) && fs_1.default.lstatSync(dirPath).isDirectory();
}
exports.isDirectory = isDirectory;
function userInput(prompt, defaultInput) {
    return __awaiter(this, void 0, void 0, function* () {
        const rl = readline_1.default.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        return new Promise((resolve, reject) => {
            rl.question(prompt, (response) => {
                rl.close();
                if (response) {
                    resolve(response);
                }
                else {
                    reject(new Error('Invalid response: ' + response));
                }
            });
            rl.write(defaultInput || '');
        });
    });
}
exports.userInput = userInput;
//# sourceMappingURL=utils.js.map