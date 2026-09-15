class User {
    readonly id: number;
    name: string;   // public default modifier
    private age: number;    // private, only can access using getter method
    private email: string;

    constructor(id: number, name: string, age: number, email: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.email = email;
    };

    // Getter method to access private property
    getAge(): number {
        return this.age;
    };

    // Another way to get a private property
    get userEmail(): string {
        return this.email
    };

    set userEmail(email: string) {
        this.email = email;
    };

    // Class method
    introduce(): string {
        return `I'm ${this.name} and I'm ${this.age} years old.`;
    };
};

const firstUser = new User(1, "First User", 21, "mysecondemail@email.com")
console.log(firstUser.name);
console.log(firstUser.getAge());
// firstUser.id = 2;    // Error, id is a readonly property, cannot be updated later set
console.log(firstUser.introduce());
console.log(firstUser.userEmail);
firstUser.userEmail = "myfirstemail@email.com";

// Inheritance
class Admin extends User {
    deleteUser(): void {
        console.log("User deleted.")
    };
};

const admin = new Admin(1, "admin", 100 ,"adm@admins.com");
console.log(admin.introduce());
admin.deleteUser();

// Implements
interface IService {
    create(): void;
    list(): void;
};

class Service implements IService {
    create(): void {
        console.log("Created!")
    };

    list(): void {
        console.log("Listing...")
    };
};

// Abstract and Override
abstract class User2 {
    constructor(public name: string) {};

    abstract getRole(): string; // All inheritance needs give it

    introduce(): string {
        return `I'm ${this.name}`;
    };
};

class Admin2 extends User2 {
    getRole(): string {
        return "Admin";
    };
    
    override introduce(): string {
        return "I'm and Admin."
    }

    // Overriding + super
/*  override introduce(): string {
        return super.introduce() + "and also an admin."
    }
*/
};

class Customer extends User2 {
    getRole(): string {
        return "Customer";
    };
};

const admin2 = new Admin2("Second Admin");
const customer = new Customer("First Customer");

console.log(admin2.getRole());    // Admin
console.log(customer.getRole());  // Customer