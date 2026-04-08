# Weather App

This project is a simple weather application that fetches and displays weather data for a specified city using the OpenWeatherMap API. The application is designed to be responsive and user-friendly, providing a seamless experience across devices.

## Features

- Fetches weather data using the OpenWeatherMap API
- Displays current temperature, weather conditions, humidity, wind speed, pressure, visibility, sunrise, and sunset times
- Responsive design for mobile, tablet, and desktop devices
- Loading state management to enhance user experience

## Project Structure

```
weather-app
├── src
│   ├── index.html        # Main HTML document
│   ├── css
│   │   └── styles.css    # Styles for the application
│   ├── js
│   │   ├── main.js       # Entry point for JavaScript functionality
│   │   ├── api.js        # API call functions
│   │   └── ui.js         # UI update functions
│   └── components
│       └── loading.html   # HTML structure for loading state
├── package.json           # npm configuration file
├── .gitignore             # Files to ignore in version control
└── README.md              # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd weather-app
   ```
3. Install dependencies (if any):
   ```
   npm install
   ```

## Usage

1. Open `src/index.html` in your web browser.
2. Enter a city name to fetch the weather data.
3. The application will display the current weather conditions along with additional details.

## API Key

To use the OpenWeatherMap API, you will need an API key. Sign up at [OpenWeatherMap](https://openweathermap.org/) to obtain your key and update it in the `src/js/api.js` file.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is open-source and available under the [MIT License](LICENSE).