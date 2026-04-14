import React from 'react'
import ReactDOM from 'react-dom/client'

const { useState, useEffect } = React;

const fetchWeather = async (lat, lon) => {
    // Task 1A
    // Fetch from:
    // GET https://api.open-meteo.com/v1/forecast
    //   ?latitude={lat}&longitude={lon}&current_weather=true
    // Return the current_weather object
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    return null;
};

const geocodeCity = async (city) => {
    // Task 3
    // Fetch from:
    // GET https://geocoding-api.open-meteo.com/v1/search?name={city}&count=1
    // Return { latitude, longitude, name } from results[0]
    return null;
};

const LoadingSpinner = () => {
    // Task 1B
    // Render a visible loading indicator
    return <div>Loading...</div>;
};

const ErrorMessage = ({ message }) => {
    // Task 2A
    // Display the error message in a styled error box
    return <div>{message}</div>;
};

const TemperatureDisplay = ({ celsius }) => {
    // Task 2B
    // Show the temperature with a toggle between °C and °F
    // F = C * 9/5 + 32
    return <div>{celsius}°C</div>;
};

const CitySearch = ({ onSearch }) => {
    // Task 3
    // Controlled input + button; call onSearch(cityName) on submit
    return <div>Add city search here</div>;
};

const App = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [city, setCity] = useState('Toronto');

    useEffect(() => {
        // Task 1A — call fetchWeather with default coordinates for Toronto
        // lat: 43.65, lon: -79.38
    }, []);

    const handleSearch = async (cityName) => {
        // Task 3 — geocode the city then fetch its weather
    };

    return (
        <div style={{ maxWidth: 400, margin: '2rem auto', fontFamily: 'sans-serif' }}>
            <h2>Weather dashboard</h2>
            <CitySearch onSearch={handleSearch} />
            {loading && <LoadingSpinner />}
            {error && <ErrorMessage message={error} />}
            {weather && (
                <div>
                    <h3>{city}</h3>
                    <TemperatureDisplay celsius={weather.temperature} />
                    <p>Wind speed: {weather.windspeed} km/h</p>
                </div>
            )}
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode><App /></React.StrictMode>
);