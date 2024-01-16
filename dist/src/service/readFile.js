"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function readFile() {
    let fileData;
    fs_1.default.readFile(__dirname + "/index.html", (err, data) => {
        if (err) {
            console.error(`Could not read index.html file: ${err}`);
            throw new Error("Could not read index.html file");
        }
        fileData = data.toString();
    });
    if (fileData === undefined) {
        throw new Error("Could not read index.html file");
    }
    return fileData;
}
exports.default = readFile;
//# sourceMappingURL=readFile.js.map