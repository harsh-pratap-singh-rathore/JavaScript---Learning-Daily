// MAP 
let map = new Map()
map.set("IN", "India")
map.set("US", "United States")
map.set("FR", "France")

// console.log(map);
// console.log(map.get("IN"));

for (const key of map) {
    console.log(key)
}

for (const [key, value] of map) {
    console.log(key, "-> ", value)
}
