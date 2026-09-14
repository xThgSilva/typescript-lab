// Function Type
type StringOperation = (a: string, b: string) => string;
const concatenate: StringOperation = (a, b) => a + b;

console.log(concatenate("concatenate", "function"));

// Function Parameters
//Required and not required params
function greet(name: string, email?: string): void {
    console.log(`Hello, ${name}.\nE-mail: ${email ? email : 'not sent'}`)
};
greet("name");   // Hello, name.\n E-mail: not send

// Default Value, if the function dont receive any data, the value will be "Guest"
function login(username:string = "Guest") {
    console.log(`Logged as ${username}`)
};
login(); // Logged as "Guest"

// Rest Parameter
function sum(...numbers: number[]): number {
    return numbers.reduce((total, number) => total + number, 0);
};
console.log(sum(10, 20, 30, 40, 50));

function calculateAverage(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((n) => {
        total += n;
    });

    return total / numbers.length;
};
console.log(calculateAverage(1, 2, 3));

// Callback
function executeOperation(n1: number, n2: number, callback: (a: number,b: number) => number) {
    return callback(n1, n2);
};

// Function Overloads
// Signatures
function convert(valor: string): number;
function convert(valor: number): string;

function convert(valor: string | number): string | number {
    if (typeof valor === "string") 
        return Number(valor);

    return String(valor);
}