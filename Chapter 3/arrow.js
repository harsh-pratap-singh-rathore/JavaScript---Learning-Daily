function chai() {
    console.log("Hello")
    return 1 + 3

}
chai()

const add = () => { //This is arrow Function
    return 1 + 3
}
console.log(add())

const sub = (a, b) => a + b // IMPLICIT RETURN
console.log(sub(1, 2))

// This Keyword 

const a = {
    name: "Harsh",
    output: function b() {
        console.log(this.name)
    }
}
a.output()

const b = () => {
    console.log(this)
}
b()