# 🌦️ Smart City Weather Dashboard

A modern **Weather Dashboard** that provides not only weather information but also **smart recommendations like “What to Wear”** based on current weather conditions. The app uses real-time weather data and presents it with a clean UI, dynamic visuals, and useful insights.

---

## 📌 Project Overview

The **Smart City Weather Dashboard** allows users to search for weather conditions in any city and view a **5-day forecast**. It also offers **smart suggestions** such as bringing an umbrella or wearing warm clothes based on weather conditions.

The app automatically detects the user’s **current location using the browser’s Geolocation API** and displays local weather information instantly.

---

## 🚀 Features

* 🔍 **Search by City**
  Users can search weather information for any city worldwide.

* 📅 **5-Day Weather Forecast**
  Displays upcoming weather predictions to help users plan ahead.

* 👕 **“What to Wear” Recommendations**
  Provides suggestions like:

  * *Bring an umbrella* if rain probability is high.
  * *Wear a jacket* if temperature is low.
  * *Stay hydrated* during hot weather.

* 🌡️ **Dynamic Weather Icons**
  Weather icons change automatically based on weather conditions from the API.

* 🎨 **Temperature-Based UI Colors**

  * Blue background for cold temperatures
  * Orange/red for hot temperatures
  * Neutral tones for moderate weather

* 📍 **Automatic Location Detection**
  Uses the **browser Geolocation API** to fetch weather for the user’s current location.

---

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript (ES6+)**
* **React.js**
* **OpenWeather API**

---

## 🌐 API Used

This project uses the **OpenWeather API** to fetch real-time weather data.

API Documentation:
https://openweathermap.org/api

---

## 📦 Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/your-username/weather-dashboard.git
```

2. **Navigate to the project folder**

```bash
cd weather-dashboard
```

3. **Install dependencies**

```bash
npm install
```

4. **Start the development server**

```bash
npm start
```

The app will run on:

```
http://localhost:3000
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add your OpenWeather API key:

```env
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

---

## 📂 Project Structure

```
weather-dashboard
│
├── public
│
├── src
│   ├── components
│   │   ├── SearchBar.js
│   │   ├── WeatherCard.js
│   │   ├── Forecast.js
│   │   └── ClothingSuggestion.js
│   │
│   ├── services
│   │   └── weatherApi.js
│   │
│   ├── App.js
│   ├── App.css
│   └── index.js
│
└── README.md
```

---

## 🧠 Future Improvements

* 🌍 Add **multiple unit support** (°C / °F)
* 📊 Display **humidity, wind speed, and air quality**
* 🌙 Add **dark mode**
* 📱 Improve **mobile responsiveness**
* ⭐ Save **favorite cities**

---

## 📷 UI Idea

The interface adapts visually based on weather:

| Temperature | UI Color     |
| ----------- | ------------ |
| Cold        | Blue         |
| Moderate    | Neutral      |
| Hot         | Orange / Red |

This helps users quickly understand the weather conditions visually.

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

## 👨‍💻 Author

Developed by **Manish Choudhary**
