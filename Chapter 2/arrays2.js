const hero = ["Spiderman", "Ironman"]
const dc = ["Batman", "Superman"]

hero.concat(dc)
console.log(hero)

const allhero = [...hero, ...dc]
console.log(allhero)

const num = [1, 3, 6, 3, [65, 3, 6, 7], [46, 4, 2, 6, 3, 2]]
console.log(num)
const correctnumbers = num.flat(Infinity)
console.log(correctnumbers)

console.log(Array.isArray("Harsh"))
console.log(Array.from("Harsh"))

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1, s2, s3))