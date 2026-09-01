// Interfaces
interface Person {
    name: string;
    age: number;
};

// Using Person interface
const person: Person = {
    name: "person name",
    age: 25
};

// Extends between interfaces
interface Manager extends Person {
    role: string
};

// Readonly property
interface Account {
    readonly id: number; // The ID can only be set when the object is created and cannot be changed later
    username: string;
    email: string;
    phone?: string
};

const myAccount: Account = {
    id: 10,
    username: "my account username",
    email: "myaccountemail@email.com"
};

// Creating methods
interface Calculator {
    sum(a: number, b: number): number;
};

// Implements
const myCalculator: Calculator = {
    sum(a, b) {
        return a + b;
    }
}
myCalculator.sum(2, 3);

// Declaration merging
interface Book {
    author: string;
};

interface Book {
    printLength: number;
};

const myBook: Book = {
    author: "book author",
    printLength: 1950
};