let arr = [1, 2, 3, 4];

// Note: localStorage.setItem does not return a value (it returns undefined)
localStorage.setItem("todo", JSON.stringify(arr));

// To get the real array back, you must use JSON.parse()
let arrstorage = JSON.parse(localStorage.getItem("todo"));
console.log(arrstorage); // This will print the actual array [1, 2, 3, 4]

