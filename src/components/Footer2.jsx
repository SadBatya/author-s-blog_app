import { useEffect, useState } from 'react';
import { getWeather } from '../api/weatherApi';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    console.log(getWeather())
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

