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

// Intersection Types
type User = {
    readonly id: number;
    name: string;
};

type Employee = {
    department: string;
};

type UserEmployee = User & Employee;

const employee: UserEmployee = {
    id: 1,
    name: "employee",
    department: "IT"
};

// keyof
type UserEmployeeKeys = keyof UserEmployee; // Union of UserEmplyee properties

type User2 = {
    id: number;
    name: string;
    email: string;
};

const user4: User2 = {
    id: 15,
    name: "user4",
    email: "user4email@email.com"
};

console.log(user["name"]);  // get user4 name property

const key: keyof User2 = "name"; // Is necessary to use keyof when creating a variable, because it allows that TypeScript will 
                                // know that the property exists 
console.log(user[key]);

function getUserProperty(user: User, key: keyof User) { // Can get any property from user: User, if exists
    return user[key];
}

const id = getUserProperty(user4, "id");    // TypeScript can inference through property type "id"

// indexed type acess
type User2Name = User["name"];   // User2Name is defined as string

type User2Keys = keyof User2;   // "id" | "name" | "email"
type User2Values = User2[keyof User2]   // "number" | "string" | "string", or just "number" | "string"