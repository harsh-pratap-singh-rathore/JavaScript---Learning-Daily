// for Loop 
for (let i = 0; i <= 10; i++) {
    console.log(i);

}

// for loop with if else 
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        console.log("five");
        break
    }
    console.log(i);

}

// with array 
let myarr = [1, 2, 3, 4]
for (let i = 0; i < myarr.length; i++) {
    const element = myarr[i];
    console.log(element);


}

// While Loop 
let i = 0
while (i <= 10) {
    console.log(`value of i is ${i}`);
    i = i + 2
}

// Do while loop
let score = 11
do {
    console.log(`score is ${score}`);
    score++

} while (score <= 10);