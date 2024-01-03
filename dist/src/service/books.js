"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthors = exports.getBooks = void 0;
const books = JSON.stringify([
    { title: "atmoic habits", author: "James Clear", year: 2018 },
    { title: "Start with why", author: "Simon Sinek", year: 2009 }
]);
const authors = JSON.stringify([
    { name: "James Clear", countryOfBirth: "US", yearOfBirth: 1986 },
    { name: "Simon Sinek", countryOfBirth: "UK", yearOfBirth: 1983 }
]);
const getBooks = () => {
    return books;
};
exports.getBooks = getBooks;
const getAuthors = () => {
    return authors;
};
exports.getAuthors = getAuthors;
//# sourceMappingURL=books.js.map