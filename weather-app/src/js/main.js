const API_KEY = "41fa3f1392dbb6a0cc306376c44b5443";

import { fetchWeatherData } from './api.js';
import { displayWeather, showLoading, hideLoading } from './ui.js';

async function init() {
    const city = "Pune";
    showLoading();
    try {
        const weatherData = await fetchWeatherData(city, API_KEY);
        displayWeather(weatherData);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    } finally {
        hideLoading();
    }
}

window.onload = init;