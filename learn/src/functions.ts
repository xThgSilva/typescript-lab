// Function Type
type StringOperation = (a: string, b: string) => string;
const concatenate: StringOperation = (a, b) => a + b;

console.log(concatenate("concatenate", "function"));

// Function Parameters
//Required and not required params
function greet(name: string, email?: string): void {
    console.log(`Hello, ${name}.\nE-mail: ${email ? email : 'not sent'}`)
}
greet("name")   // Hello, name.\n E-mail: not send

// Default Value
