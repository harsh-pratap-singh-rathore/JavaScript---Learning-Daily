const input = document.querySelector("#guessInput")
const submit = document.querySelector("#submit")
const showresult = document.querySelector("#realAndGuessed")
const showhistory = document.querySelector("#history")
const allguess = []
let randnum = Math.floor(Math.random() * 100 + 1)
submit.addEventListener("click", () => {
    const userguess = parseInt(input.value)
    allguess.push(userguess)
    if (isNaN(userguess) || userguess < 1 || userguess > 100) {
        showresult.innerHTML = "Please Enter Number Bwtween 1-100 only"
    }
    else if (userguess === randnum) {
        showresult.innerHTML = `Guessed Correct !!! ${randnum} was the correct number`
    }
    else if (userguess > randnum) {
        showresult.innerHTML = `Too High`
    }
    else if (userguess < randnum) {
        showresult.innerHTML = `Too Low`
    }
    showhistory.innerHTML = `Previous Guesses : ${allguess}`
    input.value = ""
    input.focus()
})