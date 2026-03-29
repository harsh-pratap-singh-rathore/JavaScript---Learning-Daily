let newdate = Date()
console.log(newdate)
console.log(typeof (newdate))

let mydate = new Date("03-19-2026")
console.log(mydate)
console.log(mydate.toString())

let timestamp = Date.now()
console.log(timestamp)
console.log(mydate.getTime())
console.log(Math.floor(Date.now() / 1000))