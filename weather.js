function getWeather() {
  const selectedCity = document.getElementById('citySelect').value;
  const temperatureElement = document.getElementById('tem');
  const weatherInfoElement = document.getElementById('weather-info');
  const rat = document.getElementById('wind-info');
 
  if (!selectedCity) {
    alert('Please select a city');
    return;
  }
  const weathera = async (city) => {
    const currentWeatherUrl = `https://goweather.herokuapp.com/weather/${city}`;

    console.log(`Getting current weather for ${city}...`);
    try {
      let response = await fetch(currentWeatherUrl);
      if (!response.ok) {
        throw { error: 'Network response was not ok' };
      }
      let data = await response.json();
      displayWeather(data, city, temperatureElement, weatherInfoElement,rat);
    } 
    catch (error) {
      console.error(`Error getting current weather for ${city}:`, error);
    }
  };
  
  weathera(selectedCity);

}

function displayWeather(data, city, temperatureElement, weatherInfoElement,rat) {
  temperatureElement.innerHTML =data.temperature//`<div>${data.temperature}</div>`;
  weatherInfoElement.innerHTML = data.description
  rat.innerHTML= `Wind: ${data.wind}`;
 
}

  
  

