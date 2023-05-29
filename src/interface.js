// eslint-disable-next-line import/extensions, no-unused-vars
import { HitAPI, Utils } from "./api.js";

console.log("this seem to be working");

const DOMStuff = (() => {
  const searchInput = document.querySelector("#searchLocation");
  const searchButton = document.querySelector("#searchBtn");
  const toggleButton = document.querySelector("#toggleBtn");
  const dataContainer = document.querySelector("#dataContainer");

  let weatherData = null;
  let useCelsius = true; // Flag variable to track unit preference

  const renderData = (useFeelsLikeCelsius) => {
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
    const temperatureValue = useCelsius ? temperatureC : temperatureF;
    temperaturePara.textContent = `Temperature: ${temperatureValue}°${
      useCelsius ? "C" : "F"
    }`;
    dataContainer.appendChild(temperaturePara);

    const feelsLikePara = document.createElement("p");
    const feelsLikeValue = useFeelsLikeCelsius ? feelsLikeC : feelsLikeF;
    feelsLikePara.textContent = `Feels Like: ${feelsLikeValue}°${
      useCelsius ? "C" : "F"
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

  const handleSearch = async (event) => {
    event.preventDefault();
    const location = searchInput.value;
    try {
      weatherData = await HitAPI.getWeatherByLocation(location);
      renderData(true);
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

    toggleButton.addEventListener("click", () => {
      useCelsius = !useCelsius; // Toggle the unit preference
      const useFeelsLikeCelsius = useCelsius; // Use the same unit preference for feels-like value
      renderData(useFeelsLikeCelsius); // Render data with updated unit preference
    });
  };

  return {
    init,
    renderData,
  };
})();

DOMStuff.init();
