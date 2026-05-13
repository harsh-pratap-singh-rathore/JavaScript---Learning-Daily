class user {
    constructor(name, age, password) {
        this.name = name;
        this.age = age;
        this.password = password;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

const harsh = new user("Harsh", 21, "123456")
harsh.greet()
console.log(harsh);

class animal extends user {
    constructor(name, age, password, legs) {
        super(name, age, password)
        this.legs = legs
    }

    walk() {
        console.log(`Walking on ${this.legs} legs`);
    }
}

const dog = new animal("Dog", 2, "123456", 4)
dog.greet()
dog.walk()
console.log(dog);

console.log(harsh instanceof user);
console.log(dog instanceof user);
