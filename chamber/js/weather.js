const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=2660365&units=metric&appid=8f13cdab0cf5564b10325e74657c1297";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.querySelector("#current-temp").textContent =
      jsObject.main.temp.toFixed(1);

    if (jsObject.main.temp <= 10 && jsObject.wind.speed > 4.828) {
      document.querySelector("#feels-like").textContent =
        jsObject.main.feels_like.toFixed(1);
    } else {
      document.querySelector("#feels-like").textContent = "N/A";
    }

    document.querySelector("#humidity").textContent = 
      jsObject.main.humidity;

      document.querySelector("#wind-speed").textContent = 
      jsObject.wind.speed;

    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc =
      jsObject.weather[0].description.toUpperCase().charAt(0) +
      jsObject.weather[0].description.substr(1);
    document.querySelector("#weathericon").setAttribute("src", iconsrc);
    document.querySelector("#weathericon").setAttribute("alt", desc);
    document.querySelector("#weather-type").textContent = desc;
  });
