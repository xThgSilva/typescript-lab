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
};

// Using Product structure
const item1: Product =  {
    name: "notebook",
    price: 1499.99,
    status: "unavailable"
};