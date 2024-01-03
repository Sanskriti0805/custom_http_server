const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (_req: any, res: { setHeader: (arg0: string, arg1: string) => void; writeHead: (arg0: number) => void; end: (arg0: string) => void; }) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(`{"message": "This is your JSON response"}`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
