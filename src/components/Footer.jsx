import { useEffect, useState } from 'react';
import axios from 'axios';

const WEATHER_API_KEY = '60ce459a4cd6be75c8debf04e1ae3f4c';
const city = 'Miami';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${WEATHER_API_KEY}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className='flex justify-between items-center shadow-3xl p-2'>
      <div>
        <p>Блог веб-разработчика</p>
        <p>sadbatya@mail.ru</p>
      </div>
      <div>
        
        {weatherData ? (
          <>
            
            <h2>
              <span>{new Date().toLocaleString('ru', { day: 'numeric', month: 'long'})} </span>
              {weatherData.name}
            </h2>
            <p>Temperature: {Math.round(weatherData.main.temp)}°C</p>
            <p>Weather: {weatherData.weather[0].description}</p>
          </>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </div>
  );
};

export default WeatherComponent;

