import { getPremiumCars, getcheapCars } from "../service/cars.js";
import { getBooks, getAuthors } from "../service/books.js";
import { IncomingMessage, ServerResponse } from "http";

export const requestListener = async function (req: IncomingMessage, res: ServerResponse) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/books": {
            const responseData = getBooks();
            res.writeHead(200);
            res.end(responseData);
            break
        }
        case "/authors": {
            const responseData = getAuthors();
            res.writeHead(200);
            res.end(responseData);
            break
        }
        case "/premium": {
            const responseData = getPremiumCars();
            console.log(responseData);
            res.writeHead(200);
            res.end(JSON.stringify({ carName: responseData }));
            break
        }
        case "/cheap": {
            const responseData = await getcheapCars();
            console.log(responseData);
            res.writeHead(200);
            res.end(JSON.stringify({ carName: responseData }));
            break;
        }
        default:
            res.writeHead(404);
            res.end(JSON.stringify({ error: "Resource not found" }));
    }
};
