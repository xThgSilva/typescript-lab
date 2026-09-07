// Any value type works
function identity<T>(value: T): T {
    return value;
}

const result = identity(42);   // 42, number

// Generics Constraints
interface Lengthwise {
    length: number;
}

function getLength<T extends Lengthwise>(value: T): number {
    return value.length;
}

// Generics Constraints + keyof
function getProperty<T, K extends keyof T>(object: T, key: K) {
    // K has to be one of the keys of T
    return object[key];
}

type Product = {
    readonly id: number,
    name: string;
    price: number;
}

const product: Product = {
    id: 10,
    name: "TV",
    price: 999.99
}

console.log(getProperty(product, "name")) // Return "TV". T = product and K = keyof product ("id" | "name" | "price")

// Generic Types and Interfaces
type Box<T> = {
    value: T
}

// Can create any object value to "value" property in "Box"
const numberBox: Box<number> = {
    value: 56   // Need to be a number type
}

const stringBox: Box<string> = {
    value: "Now is a string box (value is string type)"
}

interface ApiResponse<T> {
    data: T,
    status: number
}

const response: ApiResponse<string> = {
    data: "Success response",
    status: 200
}

const response2: ApiResponse<number> = {
    data: 1000,
    status: 200
}

