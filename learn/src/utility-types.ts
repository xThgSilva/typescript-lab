interface User {
    readonly id: number,
    name: string,
    age?: number,
    email: string,
    active: boolean
};

// Partial -> Makes all properties optional
const updateUser: Partial<User> = {
    active: false
}

// Required -> Makes all properties required
const completeUser: Required<User> = {
    id: 1,
    name: "Complete User",
    email: "completeuser@email.com",
    active: true,
    age: 21
};

// Pick -> Select some properties from a new type
type UserProfile = Pick<User, "name" | "email" >;
const profile: UserProfile = {
    name: "Profile User",
    email: "profileuser@gmail.com"
};

// Omit -> Allow exclude a property from a type
const newUser: Omit<User, "id"> = {
    name: "New User",
    email: "newuser@email.com",
    active: true,
};

// Readonly -> Makes an object immutable
const user: Readonly<User> = {
    id: 12,
    name: "Readonly User",
    email: "readonlyuser@email.com",
    active: false
};
// user.active = true (error)

// Record -> 
type ExpenseCategory = "food" | "transport" | "housing";

const categoryColors: Record<ExpenseCategory, string> = {
    food: "green",
    transport: "blue",
    housing: "orange"
};

