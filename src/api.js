console.log("I get called from api.js!");

// TO DO:
// 1. Method for changing background based on weather
// 2. Plan interface
// 3. Change name of module to appLogic? If not too much code here
// 4. Start building interface

const HitAPI = (() => {
  const processData = (data) => {
    const processedData = {
      temperature: data.current.temp_c,
      humidity: data.current.humidity,
    };
    return processedData;
  };

  const getWeatherByLocation = async (location) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=ce6acc34934c47f3916181423232305&q=${location}`,
        { mode: "cors" }
      );
      if (!response.ok) {
        throw new Error("Unable to fetch weather data.");
      } else {
        const data = await response.json();
        const finalData = await processData(data);
        return finalData;
      }
    } catch (error) {
      console.error("An error occurred:", error.message);
      throw error;
    }
  };

  return {
    getWeatherByLocation,
  };
})();

const Utils = (() => {
  let isFahrenheit = false;

  const toggleUnit = (temperature) => {
    let convertedTemp = temperature;
    if (isFahrenheit) {
      convertedTemp = ((temperature - 32) * 5) / 9;
    } else {
      convertedTemp = (temperature * 9) / 5 + 32;
    }

    isFahrenheit = !isFahrenheit;
    return convertedTemp;
  };

  return {
    toggleUnit,
  };
})();

// Usage with error handling
(async () => {
  try {
    const weatherData = await HitAPI.getWeatherByLocation("Stockholm");
    console.log(weatherData);
  } catch (error) {
    console.error("Error occurred during weather retrieval:", error);
  }
})();

let temperature = 25;
console.log(`Temperature in Celsius: ${temperature}`);
temperature = Utils.toggleUnit(temperature);
console.log(`Temperature in Fahrenheit: ${temperature}`);
temperature = Utils.toggleUnit(temperature);
console.log(`Temperature in Celsius: ${temperature}`);
