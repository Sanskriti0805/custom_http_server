const http = require("http");
const host = 'localhost';
const port = 8000;
const requestListener = function (_req, res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(`{"message": "This is your JSON response"}`);
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
//# sourceMappingURL=json.js.map