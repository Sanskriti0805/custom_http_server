"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs = require('fs').promises;
let indexFile;
const requestListener = function (_req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(indexFile);
};
const host = "localhost";
const port = 8000;
const server = http_1.default.createServer(requestListener);
fs.readFile(__dirname + "/index.html")
    .then((contents) => {
    indexFile = contents;
    server.listen(host, port, () => {
        console.log(`Server is running on http://${host}:${port}`);
    });
})
    .catch((err) => {
    console.error(`Could not read index.html file: ${err}`);
    process.exit(1);
});
//# sourceMappingURL=htmlfile.js.map