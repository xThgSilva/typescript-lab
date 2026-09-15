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

    // Another away to get a private property
    get userEmail(): string {
        return this.email
    }

    set userEmail(email: string) {
        this.email = email;
    }

    // Class method
    introduce(): string {
        return `I'm ${this.name} and I'm ${this.age} years old.`;
    };
}

const firstUser = new User(1, "First User", 21, "mysecondemail@email.com")
console.log(firstUser.name);
console.log(firstUser.getAge);
// firstUser.id = 2;    // Error, id is a readonly property, cannot be updated later set
console.log(firstUser.introduce);
console.log(firstUser.userEmail);
firstUser.userEmail = "myfirstemail@email.com";