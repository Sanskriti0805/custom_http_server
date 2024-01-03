import http from "http";

const host = 'localhost';
const port = 8000;

const requestListener = function (_req: any, res: { setHeader: (arg0: string, arg1: string) => void; writeHead: (arg0: number) => void; end: (arg0: string) => void; }) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end("<html><body><h1>This is a HTML file </h1></body></html>");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});