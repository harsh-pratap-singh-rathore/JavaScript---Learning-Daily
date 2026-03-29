let newarr = [1, 2, 3, 4, 5]

function getarr(arr) {
    return arr
}
console.log(getarr(newarr))

let myobj = {
    name: "Harsh",
    age: 21
}

function getobj(obj) {
    return obj
}
console.log(getobj(myobj))

function add(val, val2, ...num1) {
    return num1
}
console.log(add(1, 2, 3, 4, 5))