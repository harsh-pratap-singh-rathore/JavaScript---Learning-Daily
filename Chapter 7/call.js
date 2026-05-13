function greet(username) {
    this.username = username;
    console.log(`Hello ${this.username}`);

}

function message(username, message) {
    greet.call(this, username)
    this.message = message;
    console.log(`Hello ${this.username} ${this.message}`);

}
const user = new message("Harsh", "Hello")
console.log(user);
