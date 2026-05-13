class user {
    constructor(username) {
        this.username = username
    }
    logme() {
        console.log(this.username);
    }
    static createId() {
        return Math.floor(Math.random() * 1000)
    }
}

const user1 = new user("Harsh")
const user2 = new user("John")
user1.logme()
user2.logme()
// user1.createId() //error
// console.log(user.createId());

