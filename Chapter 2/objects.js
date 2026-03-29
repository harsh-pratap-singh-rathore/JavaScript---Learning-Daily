const details = {
    name: "Harsh",
    college: "UTU",
    mail: "harshpsr9@gmail.com"
}

console.log(details)
console.log(typeof details)

console.log(details.college)
details.age = 20
details.greetings = function () {
    console.log(`Hello ${this.name}`)
}
console.log(details.greetings())
console.log(details.age)
console.log(details)

Object.freeze(details) // Used when we dont want to change the object
details.stream = "BCA"
console.log(details)