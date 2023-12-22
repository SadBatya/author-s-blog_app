export const getWeather = () => {
  const WEATHER_API_KEY = '60ce459a4cd6be75c8debf04e1ae3f4c';
  const city = 'Miami';
  const API_CALL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${WEATHER_API_KEY}`;

  return fetch(API_CALL)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error('Error fetching weather data:', error);
      throw error;
    });
};

