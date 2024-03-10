function getWeather() {
  const selectedCity = document.getElementById('citySelect').value;
  const temperatureElement = document.getElementById('tem');
  const weatherInfoElement = document.getElementById('weather-info');
  const rat = document.getElementById('wind-info');

  if (!selectedCity) {
    alert('Please select a city');
    return;
  }

  const weathera = async () => { 
    const currentWeatherUrl = `https://goweather.herokuapp.com/weather/${selectedCity}`; 

    console.log(`Getting current weather for ${selectedCity}...`);
    try {
      let response = await fetch(currentWeatherUrl);
      if (!response.ok) {
        throw { error: 'Network response was not ok' };
      }
      let data = await response.json();
      displayWeather(data, selectedCity, temperatureElement, weatherInfoElement, rat); 
    } catch (error) {
      console.error(`Error getting current weather for ${selectedCity}:`, error);
    }
  };

  weathera();
}

function displayWeather(data, city, temperatureElement, weatherInfoElement, rat) {
  temperatureElement.innerHTML = data.temperature;
  weatherInfoElement.innerHTML = data.description;
  rat.innerHTML = `Wind: ${data.wind}`;
}

  

