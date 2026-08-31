// Object Type
const user: {
    name: string;   // required
    age: number;    // required
    email?: string  // optional
} = {
    name: "username",
    age: 99
};

// Type Aliases
// Structure
type Product = {
    name: string,
    price: number,
    status: "available" | "unavailable"
}

// Using Product structure
const item1: Product =  {
    name: "notebook",
    price: 1499.99,
    status: "unavailable"
}

// Interfaces
interface Person {
    name: string;
    age: number;
}

// Using Car interface
const person: Person = {
    name: "person name",
    age: 25
}

// Extends between interfaces
interface Admin extends Person {
    role: string
}
