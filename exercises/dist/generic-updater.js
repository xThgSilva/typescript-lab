"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateUser(object, property, value) {
    object[property] = value;
    console.log(`Property ${String(property)} was updated!`);
}
const myUser = {
    id: 1,
    name: "username",
    email: "useremail@email.com"
};
// Updating name to "newusername" and email to "newuseremail@email.com"
updateUser(myUser, "name", "newusername"); // T = User | K = "name"
updateUser(myUser, "email", "newuseremail@email.com"); // T = User | K = "email"
console.log(myUser.id);
console.log(myUser.name);
console.log(myUser.email);
