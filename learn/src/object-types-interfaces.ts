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

// Discriminated Unions
type Admin = {
    role: "admin",  // Literal type, used as a discriminator
    name: string,
    permissions: string[]
};

type Customer = {
    role: "customer",   // Literal type, used as a discriminator
    name: string,
    purchases: number
};

type User = Admin | Customer;

function printUser(user: User) {
    // Using discriminator in narrowing
    if (user.role === "admin") {
        console.log(user.permissions);
    } else {
        console.log(user.purchases);
    }
}

// Useful example
type RequestState = 
{ status: "loading"; } | { status: "success"; data: string; } | { status: "error"; error: string; };
// Now TypeScript know exactly each situation
function handleRequest(state: RequestState) {
    if (state.status === "loading") {
        console.log("Loading...");
    }
    if (state.status === "success") {
        console.log(state.data);
    }
    if (state.status === "error") {
        console.log(state.error);
    }
}

// Exhaustiveness Checking
type PaymentStatus = "pending" | "approved" | "rejected";

function handlePayment(status: PaymentStatus) {
    switch (status) {
        case "pending":
            console.log("Payment is pending");
            break;

        case "approved":
            console.log("Payment approved");
            break;

        case "rejected":
            console.log("Payment rejected");
            break;

        default:
           // TypeScript will warn us if a new PaymentStatus type is added and not handled case new type of "PaymentStatus" is added for exceptions
            const exhaustiveCheck: never = status;
            return exhaustiveCheck;
    }
}