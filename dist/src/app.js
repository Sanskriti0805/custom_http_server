"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const http_1 = __importDefault(require("http"));
const routes_js_1 = require("./listener/routes.js");
const fs_1 = __importDefault(require("fs"));
const host = 'localhost';
const port = 8000;
const startServer = () => {
    const server = http_1.default.createServer(routes_js_1.requestListener);
    const log = `${Date.now()}: New Req Recieved\n`;
    fs_1.default.appendFile("log.txt", log, (err) => {
        if (err) {
            console.log("Error occured while writing to file");
            console.log(err?.message, err);
        }
    });
    server.listen(port, host, () => {
        console.log(`Server is running on http://${host}:${port}`);
    });
};
exports.startServer = startServer;
//# sourceMappingURL=app.js.map