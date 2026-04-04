const nums = [1, 2, 3]
let mynums = nums.reduce((acc, curr) => (acc + curr), 0)
console.log(mynums);

let mynums2 = nums.reduce(function (accval, currval) {
    return accval + currval
}, 0)
console.log(mynums2);

const price = [100, 200, 300, 400]

let total = price.reduce((acc, item) => (acc + item), 0)
console.log(total);

const shoppingCart = [
    {
        name: 'Apple',
        price: 100
    },
    {
        name: 'Banana',
        price: 200
    },
    {
        name: 'Orange',
        price: 300
    }
]

let totalprice = shoppingCart.reduce((acc, rupee) => (rupee.price + acc), 0)
console.log(totalprice);
