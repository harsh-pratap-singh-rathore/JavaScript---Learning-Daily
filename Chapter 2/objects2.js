const name = {}
name.fullname = {
    firstname: "Harsh",
    lastname: "Rathore"
}
console.log(name)
console.log(name.fullname.firstname)

// Merging the Objects 
obj1 = { 1: "A", 2: "B" }
obj2 = { 3: "C", 4: "D" }

obj3 = Object.assign({}, obj1, obj2)
console.log(obj3)

// Spread Operator
obj4 = { ...obj1, ...obj2 }
console.log(obj4)

const user = [
    {
        id: 1,
        name: "Harsh"
    },
    {
        id: 2,
        name: "Rathore"
    }
]
console.log(user[1].name)

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))