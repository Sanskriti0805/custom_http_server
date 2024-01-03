"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const host = 'localhost';
const port = 8000;
const requestListener = function (_req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end("<html><body><h1>This is a HTML file </h1></body></html>");
};
const server = http_1.default.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
//# sourceMappingURL=html.js.map