class user {
    constructor(name, id, pass) {
        this.name = name;
        this.id = id;
        this.pass = pass;
    }
    get pass() {
        return this._pass.toUpperCase();
    }
    set pass(value) {
        this._pass = value
    }
}
const harsh = new user("Harsh", 1, "abcd")
// console.log(harsh); 
console.log(harsh.pass);