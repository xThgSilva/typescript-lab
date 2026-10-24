interface User {
    readonly id: number;
    name: string;
    age?: number;
    email: string;
    active: boolean;
};

// Partial -> Makes all properties optional
const updateUser: Partial<User> = {
    active: false
};

// Required -> Makes all properties required
const completeUser: Required<User> = {
    id: 1,
    name: "Complete User",
    email: "completeuser@email.com",
    active: true,
    age: 21
};

// Pick -> Creates a type by selecting specific properties from an existing type
type UserProfile = Pick<User, "name" | "email">;

const profile: UserProfile = {
    name: "Profile User",
    email: "profileuser@gmail.com"
};

// Omit -> Creates a type by excluding specific properties from an existing type
const newUser: Omit<User, "id"> = {
    name: "New User",
    email: "newuser@email.com",
    active: true
};

// Readonly -> Makes all properties readonly at the type level
const user: Readonly<User> = {
    id: 12,
    name: "Readonly User",
    email: "readonlyuser@email.com",
    active: false
};

// user.active = true; // Error: Cannot assign to a readonly property

// Record -> Creates an object type with specified keys and value types
type ExpenseCategory = "food" | "transport" | "housing";

const categoryColors: Record<ExpenseCategory, string> = {
    food: "green",
    transport: "blue",
    housing: "orange"
};

// Exclude -> Removes specific members from a union type
type ExpenseStatus = "pending" | "paid" | "cancelled";

type ActiveExpenseStatus = Exclude<ExpenseStatus, "cancelled">;
// ActiveExpenseStatus can be "pending" or "paid"

// Extract -> Keeps only specific members of a union type
type PaymentMethod = "cash" | "pix" | "credit" | "debit";
type CardPayment = Extract<PaymentMethod, "credit" | "debit">; // CardPayment can be "credit" or "debit"

// NonNullable -> Removes null and undefined from a type
type ProductPrice = number | null | undefined;
type AvailablePrice = NonNullable<ProductPrice>; // AvailablePrice is number

// Parameters -> Extracts a function's parameter types as a tuple
function calculateTotal(price: number, quantity: number): number {
    return price * quantity;
}

type CalculateParams = Parameters<typeof calculateTotal>;
// CalculateParams is [price: number, quantity: number]