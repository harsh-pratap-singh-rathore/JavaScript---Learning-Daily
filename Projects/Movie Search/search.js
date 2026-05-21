const key = "d22608de"
const input = document.getElementById("searchbar")
const btn = document.getElementById("click")
const list = document.getElementById("movie list")
async function fetchmovie() {
    const movieName = input.value.trim();
    if (!movieName) {
        console.warn("Search query is empty");
        return;
    }

    const url = `http://www.omdbapi.com/?s=${encodeURIComponent(movieName)}&apikey=${key}`
    const response = await fetch(url);
    const data = await response.json()
    console.log(data);
    const movielist = []
    data.Search.forEach(movie => {
        movielist.push(movie.Title);
        const resultlist = document.createElement("li")
        resultlist.innerText = movie.Title
        list.appendChild(resultlist)
    });

    console.log(movielist);

}
btn.addEventListener("click", fetchmovie)