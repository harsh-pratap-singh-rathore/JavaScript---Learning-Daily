const coding = ["JAVA", "C++", "RUBY"]
const values = coding.filter((language) => {
    return language;
})
console.log(values);

const books = [
    {
        title: 'Book One',
        genre: 'Science',
        publish: 1981,
        edition: 2004
    },
    {
        title: 'Book Two',
        genre: 'Fiction',
        publish: 1992,
        edition: 2008
    },
    {
        title: 'Book Three',
        genre: 'Science',
        publish: 1995,
        edition: 2010
    },
    {
        title: 'Book Four',
        genre: 'History',
        publish: 2001,
        edition: 2015
    }
]

let userbook = books.filter((bk) => {
    return bk.publish >= 1990 && bk.genre === "Science";
})
console.log(userbook);


const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numbers = num.map((n) => {
    return n + 10;
})
console.log(numbers);