(()=>{console.log("I get called from api.js!");const e=async e=>{try{const r=await fetch(`https://api.weatherapi.com/v1/current.json?key=ce6acc34934c47f3916181423232305&q=${e}`,{mode:"cors"});if(r.ok){const e=await r.json(),a=await(e=>({allData:e,city:e.location.name,region:e.location.region,country:e.location.country,localTime:e.location.localtime,weatherIcon:e.current.condition.icon,weather:e.current.condition.text,temperature:e.current.temp_c,feelsLike:e.current.feelslike_c,humidity:e.current.humidity,windSpeed:e.current.wind_kph,windDirection:e.current.wind_dir,visibility:e.current.vis_km,isDay:1===e.current.is_day}))(e);return a}throw new Error("Unable to fetch weather data.")}catch(e){throw console.error("An error occurred:",e.message),e}},r=(()=>{let e=!1;return{toggleUnit:r=>{let a=r;return a=e?5*(r-32)/9:9*r/5+32,e=!e,a},switchBackground:e=>{const{isDay:r,weather:a}=e;let c;if(r)switch(a){case"Sunny":c="sunny-day-background.jpg";break;case"Clear":c="clear-day-background.jpg";break;case"Cloud":case"Partly cloudy":c="cloudy-day-background.jpg";break;case"Rain":c="rainy-day-background.jpg";break;case"Snow":c="snowy-day-background.jpg";break;case"Fog":c="foggy-day-background.jpg";break;default:c="default-day-background.jpg"}else switch(a){case"Clear":c="clear-night-background.jpg";break;case"Cloud":case"Partly cloudy":c="cloudy-night-background.jpg";break;case"Rain":c="rainy-night-background.jpg";break;case"Snow":c="snowy-night-background.jpg";break;case"Fog":c="foggy-night-background.jpg";break;default:c="default-night-background.jpg"}console.log("Background URL:",c)}}})();(async()=>{try{const a=await e("stockholm");console.log(a),r.switchBackground(a)}catch(e){console.error("Error occurred during weather retrieval:",e)}})()})(),console.log("this seem to be working");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiTUFBQUEsUUFBUUMsSUFBSSw2QkFFWixNQUFNQyxFQXFCeUJDLE1BQU9DLElBQ2xDLElBQ0UsTUFBTUMsUUFBaUJDLE1BQ3JCLG9GQUFvRkYsSUFDcEYsQ0FBRUcsS0FBTSxTQUVWLEdBQUtGLEVBQVNHLEdBRVAsQ0FDTCxNQUFNQyxRQUFhSixFQUFTSyxPQUN0QkMsT0E5QlEsQ0FBQ0YsSUFDRyxDQUNwQkcsUUFBU0gsRUFDVEksS0FBTUosRUFBS0wsU0FBU1UsS0FDcEJDLE9BQVFOLEVBQUtMLFNBQVNXLE9BQ3RCQyxRQUFTUCxFQUFLTCxTQUFTWSxRQUN2QkMsVUFBV1IsRUFBS0wsU0FBU2MsVUFDekJDLFlBQWFWLEVBQUtXLFFBQVFDLFVBQVVDLEtBQ3BDQyxRQUFTZCxFQUFLVyxRQUFRQyxVQUFVRyxLQUNoQ0MsWUFBYWhCLEVBQUtXLFFBQVFNLE9BQzFCQyxVQUFXbEIsRUFBS1csUUFBUVEsWUFDeEJDLFNBQVVwQixFQUFLVyxRQUFRUyxTQUN2QkMsVUFBV3JCLEVBQUtXLFFBQVFXLFNBQ3hCQyxjQUFldkIsRUFBS1csUUFBUWEsU0FDNUJDLFdBQVl6QixFQUFLVyxRQUFRZSxPQUN6QkMsTUFBK0IsSUFBeEIzQixFQUFLVyxRQUFRaUIsU0FlTUMsQ0FBWTdCLEdBQ3BDLE9BQU9FLENBQ1QsQ0FMRSxNQUFNLElBQUk0QixNQUFNLGdDQU1wQixDQUFFLE1BQU9DLEdBRVAsTUFEQXhDLFFBQVF3QyxNQUFNLHFCQUFzQkEsRUFBTUMsU0FDcENELENBQ1IsR0FRRUUsRUFBUSxNQUNaLElBQUlDLEdBQWUsRUFzRW5CLE1BQU8sQ0FDTEMsV0FyRWtCbkIsSUFDbEIsSUFBSW9CLEVBQWdCcEIsRUFRcEIsT0FORW9CLEVBREVGLEVBQ29DLEdBQXBCbEIsRUFBYyxJQUFXLEVBRVosRUFBZEEsRUFBbUIsRUFBSSxHQUcxQ2tCLEdBQWdCQSxFQUNURSxDQUFhLEVBNkRwQkMsaUJBMUR3Qm5DLElBQ3hCLE1BQU0sTUFBRXlCLEVBQUssUUFBRWIsR0FBWVosRUFDM0IsSUFBSW9DLEVBRUosR0FBSVgsRUFDRixPQUFRYixHQUNOLElBQUssUUFDSHdCLEVBQWdCLDJCQUNoQixNQUNGLElBQUssUUFDSEEsRUFBZ0IsMkJBQ2hCLE1BQ0YsSUFBSyxRQUNMLElBQUssZ0JBQ0hBLEVBQWdCLDRCQUNoQixNQUNGLElBQUssT0FDSEEsRUFBZ0IsMkJBQ2hCLE1BQ0YsSUFBSyxPQUNIQSxFQUFnQiwyQkFDaEIsTUFDRixJQUFLLE1BQ0hBLEVBQWdCLDJCQUNoQixNQUNGLFFBQ0VBLEVBQWdCLGtDQUlwQixPQUFReEIsR0FDTixJQUFLLFFBQ0h3QixFQUFnQiw2QkFDaEIsTUFDRixJQUFLLFFBQ0wsSUFBSyxnQkFDSEEsRUFBZ0IsOEJBQ2hCLE1BQ0YsSUFBSyxPQUNIQSxFQUFnQiw2QkFDaEIsTUFDRixJQUFLLE9BQ0hBLEVBQWdCLDZCQUNoQixNQUNGLElBQUssTUFDSEEsRUFBZ0IsNkJBQ2hCLE1BQ0YsUUFDRUEsRUFBZ0IsK0JBS3RCL0MsUUFBUUMsSUFBSSxrQkFBbUI4QyxFQUFjLEVBT2hELEVBM0VhLEdBOEVkLFdBQ0UsSUFDRSxNQUFNQyxRQUFvQjlDLEVBQTRCLGFBQ3RERixRQUFRQyxJQUFJK0MsR0FDWk4sRUFBTUksaUJBQWlCRSxFQUN6QixDQUFFLE1BQU9SLEdBQ1B4QyxRQUFRd0MsTUFBTSwyQ0FBNENBLEVBQzVELENBQ0QsRUFSRCxFLEtDN0hBeEMsUUFBUUMsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9pbnRlcmZhY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coXCJJIGdldCBjYWxsZWQgZnJvbSBhcGkuanMhXCIpO1xuXG5jb25zdCBIaXRBUEkgPSAoKCkgPT4ge1xuICBjb25zdCBwcm9jZXNzRGF0YSA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IHtcbiAgICAgIGFsbERhdGE6IGRhdGEsXG4gICAgICBjaXR5OiBkYXRhLmxvY2F0aW9uLm5hbWUsXG4gICAgICByZWdpb246IGRhdGEubG9jYXRpb24ucmVnaW9uLFxuICAgICAgY291bnRyeTogZGF0YS5sb2NhdGlvbi5jb3VudHJ5LFxuICAgICAgbG9jYWxUaW1lOiBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZSxcbiAgICAgIHdlYXRoZXJJY29uOiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb24sXG4gICAgICB3ZWF0aGVyOiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXG4gICAgICB0ZW1wZXJhdHVyZTogZGF0YS5jdXJyZW50LnRlbXBfYyxcbiAgICAgIGZlZWxzTGlrZTogZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jLFxuICAgICAgaHVtaWRpdHk6IGRhdGEuY3VycmVudC5odW1pZGl0eSxcbiAgICAgIHdpbmRTcGVlZDogZGF0YS5jdXJyZW50LndpbmRfa3BoLFxuICAgICAgd2luZERpcmVjdGlvbjogZGF0YS5jdXJyZW50LndpbmRfZGlyLFxuICAgICAgdmlzaWJpbGl0eTogZGF0YS5jdXJyZW50LnZpc19rbSxcbiAgICAgIGlzRGF5OiBkYXRhLmN1cnJlbnQuaXNfZGF5ID09PSAxLFxuICAgIH07XG4gICAgcmV0dXJuIHByb2Nlc3NlZERhdGE7XG4gIH07XG5cbiAgY29uc3QgZ2V0V2VhdGhlckJ5TG9jYXRpb24gPSBhc3luYyAobG9jYXRpb24pID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9Y2U2YWNjMzQ5MzRjNDdmMzkxNjE4MTQyMzIzMjMwNSZxPSR7bG9jYXRpb259YCxcbiAgICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgICApO1xuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gZmV0Y2ggd2VhdGhlciBkYXRhLlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnN0IGZpbmFsRGF0YSA9IGF3YWl0IHByb2Nlc3NEYXRhKGRhdGEpO1xuICAgICAgICByZXR1cm4gZmluYWxEYXRhO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiQW4gZXJyb3Igb2NjdXJyZWQ6XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0V2VhdGhlckJ5TG9jYXRpb24sXG4gIH07XG59KSgpO1xuXG5jb25zdCBVdGlscyA9ICgoKSA9PiB7XG4gIGxldCBpc0ZhaHJlbmhlaXQgPSBmYWxzZTtcblxuICBjb25zdCB0b2dnbGVVbml0ID0gKHRlbXBlcmF0dXJlKSA9PiB7XG4gICAgbGV0IGNvbnZlcnRlZFRlbXAgPSB0ZW1wZXJhdHVyZTtcbiAgICBpZiAoaXNGYWhyZW5oZWl0KSB7XG4gICAgICBjb252ZXJ0ZWRUZW1wID0gKCh0ZW1wZXJhdHVyZSAtIDMyKSAqIDUpIC8gOTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udmVydGVkVGVtcCA9ICh0ZW1wZXJhdHVyZSAqIDkpIC8gNSArIDMyO1xuICAgIH1cblxuICAgIGlzRmFocmVuaGVpdCA9ICFpc0ZhaHJlbmhlaXQ7XG4gICAgcmV0dXJuIGNvbnZlcnRlZFRlbXA7XG4gIH07XG5cbiAgY29uc3Qgc3dpdGNoQmFja2dyb3VuZCA9IChmaW5hbERhdGEpID0+IHtcbiAgICBjb25zdCB7IGlzRGF5LCB3ZWF0aGVyIH0gPSBmaW5hbERhdGE7XG4gICAgbGV0IGJhY2tncm91bmRVcmw7XG5cbiAgICBpZiAoaXNEYXkpIHtcbiAgICAgIHN3aXRjaCAod2VhdGhlcikge1xuICAgICAgICBjYXNlIFwiU3VubnlcIjpcbiAgICAgICAgICBiYWNrZ3JvdW5kVXJsID0gXCJzdW5ueS1kYXktYmFja2dyb3VuZC5qcGdcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkNsZWFyXCI6XG4gICAgICAgICAgYmFja2dyb3VuZFVybCA9IFwiY2xlYXItZGF5LWJhY2tncm91bmQuanBnXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJDbG91ZFwiOlxuICAgICAgICBjYXNlIFwiUGFydGx5IGNsb3VkeVwiOlxuICAgICAgICAgIGJhY2tncm91bmRVcmwgPSBcImNsb3VkeS1kYXktYmFja2dyb3VuZC5qcGdcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlJhaW5cIjpcbiAgICAgICAgICBiYWNrZ3JvdW5kVXJsID0gXCJyYWlueS1kYXktYmFja2dyb3VuZC5qcGdcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlNub3dcIjpcbiAgICAgICAgICBiYWNrZ3JvdW5kVXJsID0gXCJzbm93eS1kYXktYmFja2dyb3VuZC5qcGdcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkZvZ1wiOlxuICAgICAgICAgIGJhY2tncm91bmRVcmwgPSBcImZvZ2d5LWRheS1iYWNrZ3JvdW5kLmpwZ1wiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJhY2tncm91bmRVcmwgPSBcImRlZmF1bHQtZGF5LWJhY2tncm91bmQuanBnXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaCAod2VhdGhlcikge1xuICAgICAgICBjYXNlIFwiQ2xlYXJcIjpcbiAgICAgICAgICBiYWNrZ3JvdW5kVXJsID0gXCJjbGVhci1uaWdodC1iYWNrZ3JvdW5kLmpwZ1wiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQ2xvdWRcIjpcbiAgICAgICAgY2FzZSBcIlBhcnRseSBjbG91ZHlcIjpcbiAgICAgICAgICBiYWNrZ3JvdW5kVXJsID0gXCJjbG91ZHktbmlnaHQtYmFja2dyb3VuZC5qcGdcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlJhaW5cIjpcbiAgICAgICAgICBiYWNrZ3JvdW5kVXJsID0gXCJyYWlueS1uaWdodC1iYWNrZ3JvdW5kLmpwZ1wiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiU25vd1wiOlxuICAgICAgICAgIGJhY2tncm91bmRVcmwgPSBcInNub3d5LW5pZ2h0LWJhY2tncm91bmQuanBnXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJGb2dcIjpcbiAgICAgICAgICBiYWNrZ3JvdW5kVXJsID0gXCJmb2dneS1uaWdodC1iYWNrZ3JvdW5kLmpwZ1wiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJhY2tncm91bmRVcmwgPSBcImRlZmF1bHQtbmlnaHQtYmFja2dyb3VuZC5qcGdcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcIkJhY2tncm91bmQgVVJMOlwiLCBiYWNrZ3JvdW5kVXJsKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHRvZ2dsZVVuaXQsXG4gICAgc3dpdGNoQmFja2dyb3VuZCxcbiAgfTtcbn0pKCk7XG5cbi8vIFVzYWdlIHdpdGggZXJyb3IgaGFuZGxpbmdcbihhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBIaXRBUEkuZ2V0V2VhdGhlckJ5TG9jYXRpb24oXCJzdG9ja2hvbG1cIik7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICAgIFV0aWxzLnN3aXRjaEJhY2tncm91bmQod2VhdGhlckRhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBvY2N1cnJlZCBkdXJpbmcgd2VhdGhlciByZXRyaWV2YWw6XCIsIGVycm9yKTtcbiAgfVxufSkoKTtcblxuLy8gbGV0IHRlbXBlcmF0dXJlID0gMjU7XG4vLyBjb25zb2xlLmxvZyhgVGVtcGVyYXR1cmUgaW4gQ2Vsc2l1czogJHt0ZW1wZXJhdHVyZX1gKTtcbi8vIHRlbXBlcmF0dXJlID0gVXRpbHMudG9nZ2xlVW5pdCh0ZW1wZXJhdHVyZSk7XG4vLyBjb25zb2xlLmxvZyhgVGVtcGVyYXR1cmUgaW4gRmFocmVuaGVpdDogJHt0ZW1wZXJhdHVyZX1gKTtcbi8vIHRlbXBlcmF0dXJlID0gVXRpbHMudG9nZ2xlVW5pdCh0ZW1wZXJhdHVyZSk7XG4vLyBjb25zb2xlLmxvZyhgVGVtcGVyYXR1cmUgaW4gQ2Vsc2l1czogJHt0ZW1wZXJhdHVyZX1gKTtcbiIsImNvbnNvbGUubG9nKFwidGhpcyBzZWVtIHRvIGJlIHdvcmtpbmdcIik7XG4iXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIkhpdEFQSSIsImFzeW5jIiwibG9jYXRpb24iLCJyZXNwb25zZSIsImZldGNoIiwibW9kZSIsIm9rIiwiZGF0YSIsImpzb24iLCJmaW5hbERhdGEiLCJhbGxEYXRhIiwiY2l0eSIsIm5hbWUiLCJyZWdpb24iLCJjb3VudHJ5IiwibG9jYWxUaW1lIiwibG9jYWx0aW1lIiwid2VhdGhlckljb24iLCJjdXJyZW50IiwiY29uZGl0aW9uIiwiaWNvbiIsIndlYXRoZXIiLCJ0ZXh0IiwidGVtcGVyYXR1cmUiLCJ0ZW1wX2MiLCJmZWVsc0xpa2UiLCJmZWVsc2xpa2VfYyIsImh1bWlkaXR5Iiwid2luZFNwZWVkIiwid2luZF9rcGgiLCJ3aW5kRGlyZWN0aW9uIiwid2luZF9kaXIiLCJ2aXNpYmlsaXR5IiwidmlzX2ttIiwiaXNEYXkiLCJpc19kYXkiLCJwcm9jZXNzRGF0YSIsIkVycm9yIiwiZXJyb3IiLCJtZXNzYWdlIiwiVXRpbHMiLCJpc0ZhaHJlbmhlaXQiLCJ0b2dnbGVVbml0IiwiY29udmVydGVkVGVtcCIsInN3aXRjaEJhY2tncm91bmQiLCJiYWNrZ3JvdW5kVXJsIiwid2VhdGhlckRhdGEiXSwic291cmNlUm9vdCI6IiJ9