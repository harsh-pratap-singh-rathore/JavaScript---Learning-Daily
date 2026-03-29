function add(a, b) {
    return a + b
}
console.log(add(1, 2))

function isloggedin(name) {
    if (name === undefined) {
        console.log("Please enter a name")
    }
    else {
        return (`Hello ${name}`)
    }
}
console.log(isloggedin("Harsh"))