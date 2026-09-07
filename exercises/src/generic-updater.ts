/* Generic Updater

Create a generic function that updates a property of an object while preserving the relationship between the selected property
and its value type.

The function should:
- Accept an object of any compatible type.
- Accept only properties that exist on the object.
- Accept a value whose type matches the selected property.
- Update the selected property with the new value

For example, updating a name property should only accept a string, while updating an id property should only accept a number.
*/
export {}

type User = {
    id: number;
    name: string;
    email: string;
}

function updateUser<T, K extends keyof T>(object: T,property: K, value: T[K] ):void {
    object[property] = value;
    console.log(`Property ${String(property)} was updated!`)
}

const myUser: User = {
    id: 1,
    name: "username",
    email: "useremail@email.com"
}

// Updating name to "newusername" and email to "newuseremail@email.com"
updateUser(myUser, "name", "newusername");  // T = User | K = "name"
updateUser(myUser, "email", "newuseremail@email.com");  // T = User | K = "email"
console.log(myUser.id)
console.log(myUser.name)
console.log(myUser.email)