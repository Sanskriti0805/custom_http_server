"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestListener = void 0;
const cars_js_1 = require("../service/cars.js");
const books_js_1 = require("../service/books.js");
const requestListener = async function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/books": {
            const responseData = (0, books_js_1.getBooks)();
            res.writeHead(200);
            res.end(responseData);
            break;
        }
        case "/authors": {
            const responseData = (0, books_js_1.getAuthors)();
            res.writeHead(200);
            res.end(responseData);
            break;
        }
        case "/premium": {
            const responseData = (0, cars_js_1.getPremiumCars)();
            console.log(responseData);
            res.writeHead(200);
            res.end(JSON.stringify({ carName: responseData }));
            break;
        }
        case "/cheap": {
            const responseData = await (0, cars_js_1.getcheapCars)();
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
exports.requestListener = requestListener;
//# sourceMappingURL=routes.js.map