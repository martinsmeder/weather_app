// eslint-disable-next-line import/extensions, no-unused-vars
import { HitAPI, Utils } from "./api.js";

console.log("this seem to be working");

const DOMStuff = (() => {
  const searchInput = document.querySelector("#searchLocation");
  const searchButton = document.querySelector("#searchBtn");
  const toggleButton = document.querySelector("#toggleBtn");
  const dataContainer = document.querySelector("#dataContainer");

  const isFahrenheit = false; // Global variable for temperature units

  const renderData = (weatherData) => {
    const {
      city,
      localTime,
      weatherIcon,
      weather,
      temperature,
      feelsLike,
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
    temperaturePara.textContent = `Temperature: ${temperature}°C`;
    temperaturePara.classList.add("temperature"); // Add class for temperature
    dataContainer.appendChild(temperaturePara);

    const feelsLikePara = document.createElement("p");
    feelsLikePara.textContent = `Feels Like: ${feelsLike}°C`;
    feelsLikePara.classList.add("feels-like"); // Add class for feels like
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
      const weatherData = await HitAPI.getWeatherByLocation(location);
      renderData(weatherData);
    } catch (error) {
      console.error("Error occurred during weather retrieval:", error);
    }
  };

  const toggleUnits = () => {
    const temperatureElements = document.querySelectorAll(".temperature");
    const feelsLikeElements = document.querySelectorAll(".feels-like");

    temperatureElements.forEach((element) => {
      const currentTemperature = parseInt(element.textContent);
      const convertedTemperature = Utils.toggleUnit(currentTemperature);
      element.textContent = `${convertedTemperature}°${
        isFahrenheit ? "F" : "C"
      }`;
    });

    feelsLikeElements.forEach((element) => {
      const currentFeelsLike = parseInt(element.textContent);
      const convertedFeelsLike = Utils.toggleUnit(currentFeelsLike);
      element.textContent = `${convertedFeelsLike}°${isFahrenheit ? "F" : "C"}`;
    });
  };

  const init = () => {
    searchButton.addEventListener("click", handleSearch);
    searchInput.addEventListener("keydown", (event) => {
      if (event.keyCode === 13) {
        handleSearch(event);
      }
    });

    toggleButton.addEventListener("click", () => {
      toggleUnits();
    });
  };

  return {
    init,
    renderData,
    toggleUnits,
  };
})();

DOMStuff.init();

// // Main module for coordinating the application
// const Controller = (() => {
//   // Private method to handle API call and data rendering
//   const fetchAndRender = async (location) => {
//     try {
//       const weatherData = await HitAPI.getWeatherByLocation(location);
//       DOMModule.renderWeatherData(weatherData);
//     } catch (error) {
//       console.error("Error occurred during weather retrieval:", error);
//       // Handle error case, show error message, etc.
//     }
//   };

//   // Public method to initialize the application
//   const init = () => {
//     DOMModule.init();
//   };

//   return {
//     init,
//     fetchAndRender,
//   };
// })();

// Initialize the application
