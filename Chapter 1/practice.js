// Q1 - Make a String variable and add number to it 
let a = "Harsh"
let b = 5
console.log(a + b)
// Q2 - Use typeof operator to find the type of the variable created above
console.log(typeof a)
console.log(typeof b)
// Q3 - Create object of const and change its value 

const a2 = {
    name: "Harsh"
}
// a2 = 5  soo its not possible at all ! 
// Q4 - Add keys and values to Q3 
a2["College"] = "UTU" // its possible you can add keys and its values after making it ! 
console.log(a2)
// Q5 - Create a word meaning Dictonary 
const dict = {
    "Hello": "Hi",
    "Bye": "Good Bye",
    "How are you": "Kaise ho",
    "What is your name": "Tumhara naam kya hai",
    "What is your age": "Tumhari umar kya hai",
}
console.log(dict['Bye']) // its possible to access the values of the object using the keys ! 
