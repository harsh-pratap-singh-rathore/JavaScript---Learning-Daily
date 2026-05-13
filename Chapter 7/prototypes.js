const human = {
    walk() {
        console.log("Walking");

    }
}

const harsh = Object.create(human)
harsh.walk()
harsh.name = "Harsh"
harsh.age = 21
harsh.talk = function () {
    console.log("Talking");
}
console.log(harsh);

