(()=>{console.log("I get called from api.js!");const e=async e=>{try{const r=await fetch(`https://api.weatherapi.com/v1/current.json?key=ce6acc34934c47f3916181423232305&q=${e}`,{mode:"cors"});if(r.ok){const e=await r.json(),t=await(e=>({temperature:e.current.temp_c,humidity:e.current.humidity}))(e);return t}throw new Error("Unable to fetch weather data.")}catch(e){throw console.error("An error occurred:",e.message),e}},r=(()=>{let e=!1;return{toggleUnit:r=>{let t=r;return t=e?5*(r-32)/9:9*r/5+32,e=!e,t}}})();(async()=>{try{const r=await e("Stockholm");console.log(r)}catch(e){console.error("Error occurred during weather retrieval:",e)}})();let t=25;console.log(`Temperature in Celsius: ${t}`),t=r.toggleUnit(t),console.log(`Temperature in Fahrenheit: ${t}`),t=r.toggleUnit(t),console.log(`Temperature in Celsius: ${t}`)})(),console.log("this seem to be working");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiTUFBQUEsUUFBUUMsSUFBSSw2QkFRWixNQUFNQyxFQVN5QkMsTUFBT0MsSUFDbEMsSUFDRSxNQUFNQyxRQUFpQkMsTUFDckIsb0ZBQW9GRixJQUNwRixDQUFFRyxLQUFNLFNBRVYsR0FBS0YsRUFBU0csR0FFUCxDQUNMLE1BQU1DLFFBQWFKLEVBQVNLLE9BQ3RCQyxPQWxCUSxDQUFDRixJQUNHLENBQ3BCRyxZQUFhSCxFQUFLSSxRQUFRQyxPQUMxQkMsU0FBVU4sRUFBS0ksUUFBUUUsV0FlR0MsQ0FBWVAsR0FDcEMsT0FBT0UsQ0FDVCxDQUxFLE1BQU0sSUFBSU0sTUFBTSxnQ0FNcEIsQ0FBRSxNQUFPQyxHQUVQLE1BREFsQixRQUFRa0IsTUFBTSxxQkFBc0JBLEVBQU1DLFNBQ3BDRCxDQUNSLEdBUUVFLEVBQVEsTUFDWixJQUFJQyxHQUFlLEVBY25CLE1BQU8sQ0FDTEMsV0Fia0JWLElBQ2xCLElBQUlXLEVBQWdCWCxFQVFwQixPQU5FVyxFQURFRixFQUNvQyxHQUFwQlQsRUFBYyxJQUFXLEVBRVosRUFBZEEsRUFBbUIsRUFBSSxHQUcxQ1MsR0FBZ0JBLEVBQ1RFLENBQWEsRUFNdkIsRUFsQmEsR0FxQmQsV0FDRSxJQUNFLE1BQU1DLFFBQW9CdEIsRUFBNEIsYUFDdERGLFFBQVFDLElBQUl1QixFQUNkLENBQUUsTUFBT04sR0FDUGxCLFFBQVFrQixNQUFNLDJDQUE0Q0EsRUFDNUQsQ0FDRCxFQVBELEdBU0EsSUFBSU4sRUFBYyxHQUNsQlosUUFBUUMsSUFBSSwyQkFBMkJXLEtBQ3ZDQSxFQUFjUSxFQUFNRSxXQUFXVixHQUMvQlosUUFBUUMsSUFBSSw4QkFBOEJXLEtBQzFDQSxFQUFjUSxFQUFNRSxXQUFXVixHQUMvQlosUUFBUUMsSUFBSSwyQkFBMkJXLEksS0M1RXZDWixRQUFRQyxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2ludGVyZmFjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyhcIkkgZ2V0IGNhbGxlZCBmcm9tIGFwaS5qcyFcIik7XG5cbi8vIFRPIERPOlxuLy8gMS4gTWV0aG9kIGZvciBjaGFuZ2luZyBiYWNrZ3JvdW5kIGJhc2VkIG9uIHdlYXRoZXJcbi8vIDIuIFBsYW4gaW50ZXJmYWNlXG4vLyAzLiBDaGFuZ2UgbmFtZSBvZiBtb2R1bGUgdG8gYXBwTG9naWM/IElmIG5vdCB0b28gbXVjaCBjb2RlIGhlcmVcbi8vIDQuIFN0YXJ0IGJ1aWxkaW5nIGludGVyZmFjZVxuXG5jb25zdCBIaXRBUEkgPSAoKCkgPT4ge1xuICBjb25zdCBwcm9jZXNzRGF0YSA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IHtcbiAgICAgIHRlbXBlcmF0dXJlOiBkYXRhLmN1cnJlbnQudGVtcF9jLFxuICAgICAgaHVtaWRpdHk6IGRhdGEuY3VycmVudC5odW1pZGl0eSxcbiAgICB9O1xuICAgIHJldHVybiBwcm9jZXNzZWREYXRhO1xuICB9O1xuXG4gIGNvbnN0IGdldFdlYXRoZXJCeUxvY2F0aW9uID0gYXN5bmMgKGxvY2F0aW9uKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PWNlNmFjYzM0OTM0YzQ3ZjM5MTYxODE0MjMyMzIzMDUmcT0ke2xvY2F0aW9ufWAsXG4gICAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICAgKTtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGZldGNoIHdlYXRoZXIgZGF0YS5cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zdCBmaW5hbERhdGEgPSBhd2FpdCBwcm9jZXNzRGF0YShkYXRhKTtcbiAgICAgICAgcmV0dXJuIGZpbmFsRGF0YTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkFuIGVycm9yIG9jY3VycmVkOlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFdlYXRoZXJCeUxvY2F0aW9uLFxuICB9O1xufSkoKTtcblxuY29uc3QgVXRpbHMgPSAoKCkgPT4ge1xuICBsZXQgaXNGYWhyZW5oZWl0ID0gZmFsc2U7XG5cbiAgY29uc3QgdG9nZ2xlVW5pdCA9ICh0ZW1wZXJhdHVyZSkgPT4ge1xuICAgIGxldCBjb252ZXJ0ZWRUZW1wID0gdGVtcGVyYXR1cmU7XG4gICAgaWYgKGlzRmFocmVuaGVpdCkge1xuICAgICAgY29udmVydGVkVGVtcCA9ICgodGVtcGVyYXR1cmUgLSAzMikgKiA1KSAvIDk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnZlcnRlZFRlbXAgPSAodGVtcGVyYXR1cmUgKiA5KSAvIDUgKyAzMjtcbiAgICB9XG5cbiAgICBpc0ZhaHJlbmhlaXQgPSAhaXNGYWhyZW5oZWl0O1xuICAgIHJldHVybiBjb252ZXJ0ZWRUZW1wO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgdG9nZ2xlVW5pdCxcbiAgfTtcbn0pKCk7XG5cbi8vIFVzYWdlIHdpdGggZXJyb3IgaGFuZGxpbmdcbihhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBIaXRBUEkuZ2V0V2VhdGhlckJ5TG9jYXRpb24oXCJTdG9ja2hvbG1cIik7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBvY2N1cnJlZCBkdXJpbmcgd2VhdGhlciByZXRyaWV2YWw6XCIsIGVycm9yKTtcbiAgfVxufSkoKTtcblxubGV0IHRlbXBlcmF0dXJlID0gMjU7XG5jb25zb2xlLmxvZyhgVGVtcGVyYXR1cmUgaW4gQ2Vsc2l1czogJHt0ZW1wZXJhdHVyZX1gKTtcbnRlbXBlcmF0dXJlID0gVXRpbHMudG9nZ2xlVW5pdCh0ZW1wZXJhdHVyZSk7XG5jb25zb2xlLmxvZyhgVGVtcGVyYXR1cmUgaW4gRmFocmVuaGVpdDogJHt0ZW1wZXJhdHVyZX1gKTtcbnRlbXBlcmF0dXJlID0gVXRpbHMudG9nZ2xlVW5pdCh0ZW1wZXJhdHVyZSk7XG5jb25zb2xlLmxvZyhgVGVtcGVyYXR1cmUgaW4gQ2Vsc2l1czogJHt0ZW1wZXJhdHVyZX1gKTtcbiIsImNvbnNvbGUubG9nKFwidGhpcyBzZWVtIHRvIGJlIHdvcmtpbmdcIik7XG4iXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIkhpdEFQSSIsImFzeW5jIiwibG9jYXRpb24iLCJyZXNwb25zZSIsImZldGNoIiwibW9kZSIsIm9rIiwiZGF0YSIsImpzb24iLCJmaW5hbERhdGEiLCJ0ZW1wZXJhdHVyZSIsImN1cnJlbnQiLCJ0ZW1wX2MiLCJodW1pZGl0eSIsInByb2Nlc3NEYXRhIiwiRXJyb3IiLCJlcnJvciIsIm1lc3NhZ2UiLCJVdGlscyIsImlzRmFocmVuaGVpdCIsInRvZ2dsZVVuaXQiLCJjb252ZXJ0ZWRUZW1wIiwid2VhdGhlckRhdGEiXSwic291cmNlUm9vdCI6IiJ9