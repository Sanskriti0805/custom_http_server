"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthors = exports.getBooks = void 0;
var books = JSON.stringify([
    { title: "atmoic habits", author: "James Clear", year: 2018 },
    { title: "Start with why", author: "Simon Sinek", year: 2009 }
]);
var authors = JSON.stringify([
    { name: "James Clear", countryOfBirth: "US", yearOfBirth: 1986 },
    { name: "Simon Sinek", countryOfBirth: "UK", yearOfBirth: 1983 }
]);
var getBooks = function () {
    return books;
};
exports.getBooks = getBooks;
var getAuthors = function () {
    return authors;
};
exports.getAuthors = getAuthors;
