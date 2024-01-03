import http from "http";
const fs = require('fs').promises;

let indexFile: any;
const requestListener = function(_req: any, res: { setHeader: (arg0: string, arg1: string) => void; writeHead: (arg0: number) => void; end: (arg0: any) => void; }) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(indexFile);
};
const host ="localhost";
const port = 8000;
const server = http.createServer(requestListener);
fs.readFile(__dirname + "/index.html")
    .then((contents: any) => {
        indexFile = contents;
        server.listen(host, port, () => {
            console.log(`Server is running on http://${host}:${port}`);
        });
    })
    .catch((err: any) => {
        console.error(`Could not read index.html file: ${err}`);
        process.exit(1);
    });
