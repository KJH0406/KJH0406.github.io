const API_KEY = "b49ec5b881f4e73fb1fe29a29ad198dd";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const title = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:nth-child(2)")
        const temperature = document.querySelector("#weather span:nth-child(3)")
        const weather = document.querySelector("#weather span:last-child")
        title.innerText = `FORECAST`;
        city.innerText = `City : ${data.name}`;
        temperature.innerText = `Temperature : ${data.main.temp}'c`;
        weather.innerText = `Weather : ${data.weather[0].main}`;
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);