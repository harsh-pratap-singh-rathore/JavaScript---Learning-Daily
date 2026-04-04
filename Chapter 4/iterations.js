// For of loop 

arr = [1, 2, 3, 4]
for (const key of arr) {
    console.log(key);

}

// For in loop 

for (const key in arr) {
    console.log(arr[key]);

}

// for each loop 

arr.forEach((key) => {
    console.log(key);
})

const coding = ["JAVA", "C++", "RUBY"]
const values = coding.forEach((item) => {
    console.log(item);

});
console.log(values);
