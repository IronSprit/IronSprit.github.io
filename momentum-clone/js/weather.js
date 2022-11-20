const API_KEY = "2d6843dbc762052a12c159a94cf2b638";

const images = {
  "clear sky": "http://openweathermap.org/img/wn/01d@2x.png",
  "few clouds": "http://openweathermap.org/img/wn/02d@2x.png",
  "scattered clouds": "http://openweathermap.org/img/wn/03d@2x.png",
  "broken clouds": "http://openweathermap.org/img/wn/04d@2x.png",
  "shower rain": "http://openweathermap.org/img/wn/09d@2x.png",
  rain: "http://openweathermap.org/img/wn/10d@2x.png",
  thunderstorm: "http://openweathermap.org/img/wn/11d@2x.png",
  snow: "http://openweathermap.org/img/wn/13d@2x.png",
  mist: "http://openweathermap.org/img/wn/50d@2x.png",
};

function onGeoOk(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // const weatherContainer = document.querySelector(
      //   "#weather span:first-child"
      // );
      // const cityContainer = document.querySelector("#weather span:last-child");
      // const weatherContainer = document.getElementById("weather");
      const cityContainer = document.getElementById("city");

      // const city = data.name;
      // const cityWeather = data.weather[0].main;
      console.dir(images);

      cityContainer.innerText = data.name;
      // weatherContainer.innerText = data.weather[0].main;

      const cityWeather = data.weather[0].description;
      document.querySelector(".weather-body img").src = images[cityWeather];
    });
}

function onGeoError() {
  console.log("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
