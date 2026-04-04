const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newnum = num.map((num) => num * 10).filter((num) => num >= 40)
console.log(newnum);