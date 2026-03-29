const score = 100
console.log(score)

const balance = new Number(100)
console.log(balance)
console.log(typeof balance)

console.log(balance.toString())
console.log(balance.toFixed(3))
console.log(balance.toLocaleString('en-IN'))

const otherNumber = 123.4567
console.log(otherNumber.toPrecision(4))

const hundreds = 1000000000
console.log(hundreds.toLocaleString('en-US'))

// +++++++++++++ Maths +++++++++++++

console.log(Math)
const num = -5
console.log(Math.abs(num))
console.log(Math.round(4.2))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))
console.log(Math.min(4, 2, 5, 3, 1))
console.log(Math.max(4, 2, 5, 3, 1))
console.log(Math.random())
console.log(Math.random() * 10)
console.log(Math.random() * 10 + 1)
console.log(Math.floor(Math.random() * 10 + 1))
