const axios = require('axios');

// City is hardcoded as Amsterdam
const city = 'Eindhoven';

// Your API key
const apiKey = '580fe5cd2a1c12c08d49ed6aa8c1ba8b';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function getWeather() {
  try {
    const response = await axios.get(url);
    const data = response.data;

    const temp = data.main.temp;
    const description = data.weather[0].description;

    console.log(`🌤️  Weather in ${city}: ${temp}°C, ${description}`);
  } catch (error) {
    console.log('❌ Could not fetch weather. Make sure your API key is valid and internet is working.');
  }
}

getWeather();
