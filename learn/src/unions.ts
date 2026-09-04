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
           // TypeScript will warn if a new PaymentStatus type is added and not handled
           const exhaustiveCheck: never = status;
           return exhaustiveCheck;
    }
}