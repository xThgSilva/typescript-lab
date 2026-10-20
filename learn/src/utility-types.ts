interface User {
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

