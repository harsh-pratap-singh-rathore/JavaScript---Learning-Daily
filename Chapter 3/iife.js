// Immidiate invoked function expressions ( IIFE )

function add() {
    console.log("Hello")
}
add();

// IIFE FUNCTION
(() => {
    console.log("Hello 2")
})();

((name) => {
    console.log(`Hello ${name}`)
})("Harsh")