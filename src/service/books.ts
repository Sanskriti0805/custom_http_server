
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
}

const getAuthors = () => {
  return authors;
}

export { getBooks, getAuthors };