/* Generic Property Getter

Create a generic function that retrieves a property from an object while preserving the property's original type.

The function should:
- Work with different object types.
- Accept only properties that exist on the provided object.
- Return the correct type associated with the selected property.

For example, retrieving a price property from a Product should result in a number, while retrieving an author property
from a Book should result in a string.
*/
export {}

type Product = {
    id: number;
    name: string;
    price: number;
};

type Book = {
    id: number;
    title: string;
    author: string;
};

type User = {
    id: number;
    name: string;
    email: string;
};

function getProperty<T, K extends keyof T>(object: T, property: K) {
    return object[property]
}

const product: Product = {
    id: 1,
    name: "Monitor",
    price: 1200
};

const book: Book = {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin"
};

const user: User = {
    id: 3,
    name: "newuser",
    email: "newuser@email.com"
};

const productPrice = getProperty(product, "price");
const bookAuthor = getProperty(book, "author");
const userId = getProperty(user, "id");
console.log(productPrice, typeof productPrice);
console.log(bookAuthor, typeof bookAuthor);
console.log(userId, typeof userId);