const API_KEY = "41bc4e4588ccaeaf27e8c4a9836d92d5";

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("searchBtn");
    const cityInput = document.getElementById("cityInput");
    
    if (searchBtn) {
        searchBtn.addEventListener("click", getWeather);
    }
    
    if (cityInput) {
        cityInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                getWeather();
            }
        });
    }
});



async function getWeather(){
    const city = document.getElementById("cityInput").value.trim();

    if(city === ""){
        alert("Please enter a city name");
        return;
    }

    try{
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
        const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

        const weatherRes = await fetch(weatherURL);
        const weatherData = await weatherRes.json();

        if(!weatherRes.ok) {
            alert("City not found or API error: " + weatherData.message);
            return;
        }

        displayWeather(weatherData);

        const forecastRes = await fetch(forecastURL);
        const forecastData = await forecastRes.json();

        if(forecastRes.ok) {
            displayForecast(forecastData);
        }
    }
    catch(error){
        console.error("Error:", error);
        alert("Error fetching weather: " + error.message);
    }
}



function displayWeather(data){

const card =
document.getElementById("weatherCard");

const temp =
data.main.temp;

const condition =
data.weather[0].main.toLowerCase();

const icon =
data.weather[0].icon;

card.innerHTML =

`
<h2>${data.name}</h2>

<img src="https://openweathermap.org/img/wn/${icon}@2x.png">

<p>Temperature: ${temp} °C</p>

<p>${data.weather[0].description}</p>

<p>Humidity: ${data.main.humidity}%</p>

<p>Wind: ${data.wind.speed} m/s</p>
`;

changeBackground(temp);

clothingSuggestion(temp, condition, data);

}



function displayForecast(data){

const forecastDiv =
document.getElementById("forecast");

forecastDiv.innerHTML = "";

const daily =
data.list.filter(item =>
item.dt_txt.includes("12:00:00")
);



daily.forEach(day => {

forecastDiv.innerHTML +=

`
<div class="forecast-day">

<p>${new Date(day.dt_txt).toDateString()}</p>

<img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png">

<p>${day.main.temp} °C</p>

</div>
`;

});

}



function clothingSuggestion(temp, condition, data){
    const suggestion = document.getElementById("suggestion");
    
    let advice = [];
    let emoji = "😊";
    
    // Rain/Precipitation advice
    if(condition.includes("rain") || condition.includes("drizzle")) {
        advice.push("🌧 Bring an umbrella!");
        advice.push("👟 Wear waterproof shoes");
        emoji = "🌧";
    }
    
    // Snow advice
    if(condition.includes("snow")) {
        advice.push("❄️ Wear a heavy winter coat");
        advice.push("🧤 Don't forget gloves and a scarf");
        advice.push("👢 Wear insulated boots");
        emoji = "❄️";
    }
    
    // Temperature-based advice
    if(temp < 0) {
        advice.push("🧥 Extreme cold - wear multiple layers!");
        advice.push("🧣 Protect your face and extremities");
        emoji = "❄️";
    }
    else if(temp < 10) {
        advice.push("🧥 Wear a warm jacket");
        advice.push("🧤 Consider gloves");
        emoji = "🧥";
    }
    else if(temp < 15) {
        advice.push("🧥 Bring a light jacket");
        advice.push("👕 Layer your clothing");
        emoji = "🧥";
    }
    else if(temp > 30) {
        advice.push("☀️ Wear light, breathable clothing");
        advice.push("🕶️ Don't forget sunglasses and sunscreen");
        advice.push("🥤 Stay hydrated - drink plenty of water!");
        emoji = "☀️";
    }
    else if(temp > 25) {
        advice.push("👕 Light summer clothes recommended");
        advice.push("🕶️ Sunglasses are a good idea");
        emoji = "🌞";
    }
    
    // Humidity advice
    if(data.main.humidity > 80) {
        advice.push("💦 High humidity - wear cotton for comfort");
    }
    
    // Wind advice
    if(data.wind.speed > 10) {
        advice.push("💨 It's windy - wear a windbreaker");
    }
    
    // Thunderstorm advice
    if(condition.includes("thunder") || condition.includes("thunderstorm")) {
        advice.push("⚡ Thunderstorm warning - stay indoors if possible!");
        emoji = "⚡";
    }
    
    // Cloud/Overcast advice
    if(condition.includes("cloud") || condition.includes("overcast")) {
        advice.push("☁️ It's overcast - sunscreen still recommended");
    }
    
    // Default comfort advice
    if(advice.length === 0) {
        advice.push(emoji + " Weather looks comfortable!");
    }
    
    // Display advice
    suggestion.innerHTML = `<strong>${emoji} What to Wear Today</strong><br>${advice.join("<br>")}`;
}



function changeBackground(temp){

if(temp < 15){

document.body.style.background = "#3498db";

}

else if(temp > 30){

document.body.style.background = "#e74c3c";

}

else{

document.body.style.background = "#2ecc71";

}

}