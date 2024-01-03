
/*const getPersonalDetails = function (req, res) {
    return `id,name,email\n1,Hetal,hetal05@gmail.com`;
};

export { getPersonalDetails };*/
import { createServer } from "http";

const host = 'localhost';
const port = 8000;

const requestListener = function (_req: any, res: { setHeader: (arg0: string, arg1: string) => void; writeHead: (arg0: number) => void; end: (arg0: string) => void; }) {
res.setHeader("Content-Type", "text/csv");
res.setHeader("Content-Disposition", "attachment;filename=myfirstserver.csv");
res.writeHead(200);
res.end(`id,name,email\n1,Hetal,hetal05@gmail.com`);
};

const server = createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});