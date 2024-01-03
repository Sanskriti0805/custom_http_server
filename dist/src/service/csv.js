"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const host = 'localhost';
const port = 8000;
const requestListener = function (_req, res) {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment;filename=myfirstserver.csv");
    res.writeHead(200);
    res.end(`id,name,email\n1,Hetal,hetal05@gmail.com`);
};
const server = (0, http_1.createServer)(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
//# sourceMappingURL=csv.js.map