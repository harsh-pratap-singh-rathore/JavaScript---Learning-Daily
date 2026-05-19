const key = "6afd1c1192504d2d89445852261905"
const city = document.getElementById("city-input");
const searchbtn = document.getElementById("search-btn");

searchbtn.addEventListener("click", () => {
    if (city.value == "") {
        alert("Please Enter City Name");
        return;
    }
    let q = city.value;
    getweather(q)

});

async function getweather(city) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.current.temp_c);
        document.getElementById("temp-value").innerText = data.current.temp_c;
        document.getElementById("city-name").innerText = city;
        document.getElementById("feels-like-val").innerText = data.current.feelslike_c;
        document.getElementById("weather-desc").innerText = data.current.condition.text;
        document.getElementById("humidity-val").innerText = data.current.humidity;
        document.getElementById("wind-val").innerText = data.current.wind_kph;
        document.getElementById("pressure-val").innerText = data.current.pressure_mb;
        document.getElementById("weather-icon").src = "https:" + data.current.condition.icon;


        console.log(data);
    } catch (error) {
        console.log("ERROR :", error);

    }




}






