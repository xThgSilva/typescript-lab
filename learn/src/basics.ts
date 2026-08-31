let word: string = "test";
let age: number = 100;
let price: number = 6.99;
let isActive: boolean = true;

// Inference
let username = "user";
let test: any = "a test";
test = 2000; // any type is allowed
let know: unknown; // Cannot assume its type, narrowing is necessary before manipulating it

// Arrays
const numbers = [1, 2, 3];
const words: string[] = ["a", "b", "4"];
const elements = [12, "string element", 321, false];

// Tuple
const values: [number, string, string] = [1, "2", "3"];