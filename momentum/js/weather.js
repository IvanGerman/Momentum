const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const cityInput = document.querySelector('.city');
const weatherError = document.querySelector('.weather-error');
const weatherDiv = document.querySelector('.weather');





cityInput.addEventListener('change', getWeather);
let weatherDescr = {
  'en': {
    'wind': 'Wind speed: ',
    'humidity': 'Humidity: '
  },
  'ru': {
    'wind': 'Скорость ветра: ',
    'humidity': 'Влажность: '
  }
}


async function getWeather(lang = radioBtnValue) {  

  if (!cityInput.value)  {cityInput.value = 'Minsk'};

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&lang=${lang}&appid=6518a3ce1610389973fbf1c260c5b8af&units=metric`;

  const res = await fetch(url);  

  if (res.status !== 200) { 
     
    weatherError.textContent = 'Incorrect City!';
  } else {
    weatherError.textContent = '';
  };
  
  const data = await res.json(); //res.json() - convert JSON-string to js-object

  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `${weatherDescr[lang].wind}${Math.round(data.wind.speed)} m/s`;
  humidity.textContent = `${weatherDescr[lang].humidity}${Math.round(data.main.humidity)}%`;

};




function setLocalStorage2() {

  localStorage.setItem('city', cityInput.value);

};

window.addEventListener('beforeunload', setLocalStorage2);


function getLocalStorage2() {

  if(localStorage.getItem('city')) {

    cityInput.value = localStorage.getItem('city');
    getWeather();
  };

};

window.addEventListener('load', getLocalStorage2);

getWeather();





