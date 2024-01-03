import http from "http";
import { requestListener } from "./listener/routes.js";
import fs from "fs";


const host = 'localhost';
const port = 8000;

 /*const requestListener = function (req, res) {
      res.writeHead(200);
    res.end("My first server!");
 };*/

export const startServer = () => {
  const server = http.createServer(requestListener);
  const log = `${Date.now()}: New Req Recieved\n`;
  
  fs.appendFile("log.txt", log, (err): void => {
    if (err) {
      console.log("Error occured while writing to file");
      console.log(err?.message, err)
    }
  });
 
  server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
  });
}
