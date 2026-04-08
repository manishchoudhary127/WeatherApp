const loadingElement = document.getElementById("loading");

export function showLoading() {
    loadingElement.style.display = "block";
}

export function hideLoading() {
    loadingElement.style.display = "none";
}

export function displayWeather(data) {
    document.getElementById("temp").innerText = `${data.main.temp}°`;
    document.getElementById("condition").innerText = data.weather[0].main;
    document.getElementById("status").innerText = data.weather[0].description;

    const humidity = data.main.humidity;
    const pressure = data.main.pressure;
    const visibility = data.visibility / 1000;
    const wind = data.wind.speed;

    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

    document.getElementById("weatherContainer").innerHTML = `
        <div class="card"><h4>Humidity</h4><p>${humidity}%</p></div>
        <div class="card"><h4>Wind</h4><p>${wind} m/s</p></div>
        <div class="card"><h4>Pressure</h4><p>${pressure} hPa</p></div>
        <div class="card"><h4>Visibility</h4><p>${visibility} km</p></div>
        <div class="card"><h4>Sunrise</h4><p>${sunrise}</p></div>
        <div class="card"><h4>Sunset</h4><p>${sunset}</p></div>
    `;
}