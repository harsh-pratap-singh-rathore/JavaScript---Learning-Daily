// If Statements 
score = 20
if (score > 10) {
    power = "Shoot"
    console.log(`The Power of user is ${power}`)
}

// If else Statements 
if (score > 10) {
    console.log("User has power to shoot ")
} else {
    console.log("User is immortal")
}

// Multiple If else 
if (score > 10) {
    console.log("User has power to shoot ")
} else if (score > 5) {
    console.log("User is immortal")
} else {
    console.log("User is dead")
}

// Switch Cases : 
switch (score) {
    case score > 5:
        console.log("User is about to die")
        break;
    case score > 10:
        console.log("User is immortal")
        break;
    case 15:
        console.log("User has power to shoot ")
        break;
    default:
        break;
}

// Coalescing operator ( ?? ) null undefined

let val1
val1 = 5 ?? 10
console.log(val1)

val1 = null ?? 10
console.log(val1)

val1 = undefined ?? 10
console.log(val1)

// && and || operators

console.log(true && false)
console.log(true || false)
console.log(true && true)
console.log(false || false)

// Ternary operator

console.log(score < 10 ? "User has power to shoot " : "User is immortal")
