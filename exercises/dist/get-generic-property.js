"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getProperty(object, property) {
    return object[property];
}
// Objects
const product = {
    id: 1,
    name: "Monitor",
    price: 1200
};
const book = {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin"
};
const user = {
    id: 3,
    name: "newuser",
    email: "newuser@email.com"
};
// Results
const productPrice = getProperty(product, "price");
const bookAuthor = getProperty(book, "author");
const userId = getProperty(user, "id");
console.log(productPrice, typeof productPrice);
console.log(bookAuthor, typeof bookAuthor);
console.log(userId, typeof userId);
