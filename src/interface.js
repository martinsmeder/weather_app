// eslint-disable-next-line import/extensions, no-unused-vars
import { WeatherAPI, GiphyAPI, Utils } from "./appLogic.js";

console.log("this seem to be working (interface.js)");

const Renderer = (() => {
  const dataContainer = document.querySelector("#dataContainer");
  const weatherGif = document.querySelector("#weatherGif");

  const renderData = (weatherData, useCelsiusTemp, useCelsiusFeelsLike) => {
    if (!weatherData) {
      return; // Exit if weatherData is null or undefined
    }

    const {
      city,
      localTime,
      weatherIcon,
      weather,
      temperatureC,
      temperatureF,
      feelsLikeC,
      feelsLikeF,
      humidity,
      windSpeed,
      windDirection,
      visibility,
    } = weatherData;

    // Clear previous content
    while (dataContainer.firstChild) {
      dataContainer.firstChild.remove();
    }

    const heading = document.createElement("h2");
    heading.textContent = city;
    dataContainer.appendChild(heading);

    const localTimePara = document.createElement("p");
    const time = localTime.split(" ")[1]; // Extract the time portion
    localTimePara.textContent = time;
    dataContainer.appendChild(localTimePara);

    const weatherIconImg = document.createElement("img");
    weatherIconImg.src = weatherIcon;
    weatherIconImg.alt = weather;
    dataContainer.appendChild(weatherIconImg);

    const weatherPara = document.createElement("p");
    weatherPara.textContent = `Weather: ${weather}`;
    dataContainer.appendChild(weatherPara);

    const temperaturePara = document.createElement("p");
    const temperatureValue = useCelsiusTemp ? temperatureC : temperatureF;
    temperaturePara.textContent = `Temperature: ${temperatureValue}°${
      useCelsiusTemp ? "C" : "F"
    }`;
    dataContainer.appendChild(temperaturePara);

    const feelsLikePara = document.createElement("p");
    const feelsLikeValue = useCelsiusFeelsLike ? feelsLikeC : feelsLikeF;
    feelsLikePara.textContent = `Feels Like: ${feelsLikeValue}°${
      useCelsiusTemp ? "C" : "F"
    }`;
    dataContainer.appendChild(feelsLikePara);

    const humidityPara = document.createElement("p");
    humidityPara.textContent = `Humidity: ${humidity}%`;
    dataContainer.appendChild(humidityPara);

    const windSpeedPara = document.createElement("p");
    windSpeedPara.textContent = `Wind Speed: ${windSpeed} km/h`;
    dataContainer.appendChild(windSpeedPara);

    const windDirectionPara = document.createElement("p");
    windDirectionPara.textContent = `Wind Direction: ${windDirection}`;
    dataContainer.appendChild(windDirectionPara);

    const visibilityPara = document.createElement("p");
    visibilityPara.textContent = `Visibility: ${visibility} km`;
    dataContainer.appendChild(visibilityPara);
  };

  const setGif = async (weatherData) => {
    const gifId = await Utils.setGifId(weatherData);
    const gifUrl = await GiphyAPI.getGifById(gifId);
    weatherGif.src = gifUrl;
  };

  return {
    renderData,
    setGif,
  };
})();

const Controller = (() => {
  const searchInput = document.querySelector("#searchLocation");
  const searchButton = document.querySelector("#searchBtn");
  const toggleButton = document.querySelector("#toggleBtn");

  let weatherData = null;
  let useCelsiusTemp = true;
  let useCelsiusFeelsLike = true;

  const handleSearch = async (event) => {
    event.preventDefault();
    const location = searchInput.value;
    try {
      // Render data
      weatherData = await WeatherAPI.getWeatherByLocation(location);
      Renderer.renderData(weatherData, useCelsiusTemp, useCelsiusFeelsLike);

      // Change background
      const backgroundImageUrl = Utils.switchBackground(weatherData);
      document.body.style.backgroundImage = `url(${backgroundImageUrl})`;

      // Change gif
      await Renderer.setGif(weatherData);
    } catch (error) {
      console.error("Error occurred during weather retrieval:", error);
    }
  };

  const toggleTemperatureUnit = () => {
    useCelsiusTemp = !useCelsiusTemp;
    useCelsiusFeelsLike = !useCelsiusFeelsLike;
    Renderer.renderData(weatherData, useCelsiusTemp, useCelsiusFeelsLike);
    toggleButton.textContent = useCelsiusTemp ? "Celsius" : "Fahrenheit";
  };

  const setDefaultCity = async () => {
    const defaultCity = "new york";
    try {
      weatherData = await WeatherAPI.getWeatherByLocation(defaultCity);
      Renderer.renderData(weatherData, useCelsiusTemp, useCelsiusFeelsLike);
      const backgroundImageUrl = Utils.switchBackground(weatherData);
      document.body.style.backgroundImage = `url(${backgroundImageUrl})`;
      await Renderer.setGif(weatherData);
    } catch (error) {
      console.error("Error occurred during weather retrieval:", error);
    }
  };

  const init = () => {
    searchButton.addEventListener("click", handleSearch);
    searchInput.addEventListener("keydown", (event) => {
      if (event.keyCode === 13) {
        handleSearch(event);
      }
    });

    toggleButton.addEventListener("click", toggleTemperatureUnit);

    setDefaultCity();
  };

  return {
    init,
  };
})();

Controller.init();
