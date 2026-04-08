const API_KEY = "41fa3f1392dbb6a0cc306376c44b5443";

async function fetchWeatherData(city) {
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!res.ok) {
        throw new Error('Failed to fetch weather data');
    }

    const data = await res.json();
    return data;
}

export { fetchWeatherData };