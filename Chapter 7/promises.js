const promse1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task completed");
        resolve()
    }, 2000)
})

promse1.then(function () {
    console.log("Promiseconsumed");
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = false
        if (!error) {
            resolve({ username: "Harsh" })
            console.log("Promise Resolved");
        } else {
            reject("Error : Something Went Wrong")
        }
    }, 2000);
})

promise2.then((name) => {
    console.log(name);
    return name.username
}).catch((error) => {
    console.log(error);
}).then((myname) => {
    console.log(myname);
}).finally(() => {
    console.log("This Will alwyas runn !! ");

})


const promise3 = new Promise(() => {
    const error = true
    if (!error) {
        resolve({ username: "Rathore Harsh" })
    } else {
        console.log("E : JS error");

    }
})
async function consumepromise3() {
    try {
        const result = await promise3
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

async function newreq() {
    try {
        const data = fetch('https://api.github.com/users/harsh-pratap-singh-rathore')
        const response = await data
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
newreq()