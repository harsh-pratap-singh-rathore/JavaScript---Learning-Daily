// Constructor Functions ! 
function user(name, loginCount, isLoggedIn) {
    this.name = name
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
}

const userone = new user('Harsh', 1, true)
console.log(userone);
const usertwo = new user('Rathore', 1, false)
console.log(usertwo);

