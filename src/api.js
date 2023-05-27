console.log("I get called from api.js!");

export const HitAPI = (() => {
  const processData = (data) => {
    const processedData = {
      // allData: data,
      city: data.location.name,
      region: data.location.region,
      country: data.location.country,
      localTime: data.location.localtime,
      weatherIcon: data.current.condition.icon,
      weather: data.current.condition.text,
      temperature: data.current.temp_c,
      feelsLike: data.current.feelslike_c,
      humidity: data.current.humidity,
      windSpeed: data.current.wind_kph,
      windDirection: data.current.wind_dir,
      visibility: data.current.vis_km,
      isDay: data.current.is_day === 1,
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

export const Utils = (() => {
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

  const switchBackground = (finalData) => {
    const { isDay, weather } = finalData;
    let backgroundUrl;

    if (isDay) {
      switch (weather) {
        case "Sunny":
          backgroundUrl = "sunny-day-background.jpg";
          break;
        case "Clear":
          backgroundUrl = "clear-day-background.jpg";
          break;
        case "Cloud":
        case "Partly cloudy":
          backgroundUrl = "cloudy-day-background.jpg";
          break;
        case "Rain":
          backgroundUrl = "rainy-day-background.jpg";
          break;
        case "Snow":
          backgroundUrl = "snowy-day-background.jpg";
          break;
        case "Fog":
          backgroundUrl = "foggy-day-background.jpg";
          break;
        default:
          backgroundUrl = "default-day-background.jpg";
          break;
      }
    } else {
      switch (weather) {
        case "Clear":
          backgroundUrl = "clear-night-background.jpg";
          break;
        case "Cloud":
        case "Partly cloudy":
          backgroundUrl = "cloudy-night-background.jpg";
          break;
        case "Rain":
          backgroundUrl = "rainy-night-background.jpg";
          break;
        case "Snow":
          backgroundUrl = "snowy-night-background.jpg";
          break;
        case "Fog":
          backgroundUrl = "foggy-night-background.jpg";
          break;
        default:
          backgroundUrl = "default-night-background.jpg";
          break;
      }
    }

    console.log("Background URL:", backgroundUrl);
  };

  return {
    toggleUnit,
    switchBackground,
  };
})();

// Usage with error handling
(async () => {
  try {
    const weatherData = await HitAPI.getWeatherByLocation("stockholm");
    console.log(weatherData);
    Utils.switchBackground(weatherData);
  } catch (error) {
    console.error("Error occurred during weather retrieval:", error);
  }
})();

// let temperature = 25;
// console.log(`Temperature in Celsius: ${temperature}`);
// temperature = Utils.toggleUnit(temperature);
// console.log(`Temperature in Fahrenheit: ${temperature}`);
// temperature = Utils.toggleUnit(temperature);
// console.log(`Temperature in Celsius: ${temperature}`);
