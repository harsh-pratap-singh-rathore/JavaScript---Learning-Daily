const body = document.querySelector("body")
const btn = document.querySelectorAll("button")

btn.forEach((btn) => {
    btn.addEventListener('click', () => {
        body.style.backgroundColor = btn.id
    })
})