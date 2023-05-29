console.log("this seem to be working (appLogic.js)");

export const WeatherAPI = (() => {
  const processData = (data) => {
    const processedData = {
      // allData: data,
      city: data.location.name,
      localTime: data.location.localtime,
      weatherIcon: data.current.condition.icon,
      weather: data.current.condition.text,
      temperatureC: data.current.temp_c,
      temperatureF: data.current.temp_f,
      feelsLikeC: data.current.feelslike_c,
      feelsLikeF: data.current.feelslike_f,
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

export const GiphyAPI = (() => {
  const processGifData = (data) => {
    const gifUrl = data.data.images.original.url;
    return gifUrl;
  };

  const getGifById = async (gifId) => {
    const apiKey = "8ewGe5vteIERFUPE6ZbcFuqh7mCIUIzY";
    const url = `https://api.giphy.com/v1/gifs/${gifId}?api_key=${apiKey}`;

    try {
      const response = await fetch(url, { mode: "cors" });
      if (!response.ok) {
        throw new Error("Unable to fetch GIF data.");
      } else {
        const data = await response.json();
        const gifUrl = processGifData(data);
        return gifUrl;
      }
    } catch (error) {
      console.error("An error occurred:", error.message);
      throw error;
    }
  };
  return {
    getGifById,
  };
})();

export const Utils = (() => {
  const switchBackground = (finalData) => {
    const { isDay, weather } = finalData;
    let backgroundUrl;

    if (isDay) {
      if (weather.toLowerCase().includes("sun")) {
        backgroundUrl = "images/sunny_day.jpg";
      } else if (weather.toLowerCase().includes("cloud")) {
        backgroundUrl = "images/cloudy_day.jpg";
      } else if (weather.toLowerCase().includes("rain")) {
        backgroundUrl = "images/rainy_day.jpg";
      } else if (weather.toLowerCase().includes("snow")) {
        backgroundUrl = "images/snowy_day.jpg";
      } else if (weather.toLowerCase().includes("fog")) {
        backgroundUrl = "images/foggy_day.jpg";
      } else {
        backgroundUrl = "images/default_day.jpg";
      }
    } else if (weather.toLowerCase().includes("clear")) {
      backgroundUrl = "images/clear_night.jpg";
    } else if (weather.toLowerCase().includes("cloud")) {
      backgroundUrl = "images/cloudy_night.jpg";
    } else if (weather.toLowerCase().includes("rain")) {
      backgroundUrl = "images/rainy_night.jpg";
    } else if (weather.toLowerCase().includes("snow")) {
      backgroundUrl = "images/snowy_night.jpg";
    } else if (weather.toLowerCase().includes("fog")) {
      backgroundUrl = "images/foggy_night.jpg";
    } else {
      backgroundUrl = "images/default_night.jpg";
    }
    return backgroundUrl;
  };

  const setGifId = (finalData) => {
    const { isDay, weather } = finalData;
    let gifId;

    if (isDay) {
      if (weather.toLowerCase().includes("sun")) {
        gifId = "3cB7aOM6347PW";
      } else if (weather.toLowerCase().includes("cloud")) {
        gifId = "l0HlQdk8kI9KIOjBe";
      } else if (weather.toLowerCase().includes("rain")) {
        gifId = "0opZPb9yugNFEd3kFQ";
      } else if (weather.toLowerCase().includes("snow")) {
        gifId = "9jvjuSSkMOYTyQfJji";
      } else if (weather.toLowerCase().includes("fog")) {
        gifId = "4CNT8NqboKa2UGpzhW";
      } else {
        gifId = "fGs29ohKkNKwV4xxKW";
      }
    } else {
      gifId = "fGs29ohKkNKwV4xxKW";
    }

    return gifId;
  };

  return {
    switchBackground,
    setGifId,
  };
})();
