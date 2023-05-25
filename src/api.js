console.log("I get called from api.js!");

const HitAPI = (() => {
  const processData = (data) => {
    const processedData = {
      temperature: data.current.temp_c,
      humidity: data.current.humidity,
    };
    return processedData;
  };

  const getWeatherByLocation = async (location) => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=ce6acc34934c47f3916181423232305&q=${location}`,
      { mode: "cors" }
    );
    const data = await response.json();
    const finalData = await processData(data);
    return finalData;
  };

  return {
    getWeatherByLocation,
  };
})();

// Usage
(async () => {
  const weatherData = await HitAPI.getWeatherByLocation("Luleå");
  console.log(weatherData);
})();
