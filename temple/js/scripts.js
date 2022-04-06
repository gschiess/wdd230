// Script for Navigation Button functionality
function toggleMenu() {
  document.getElementById("primary-nav").classList.toggle("open");
  document.getElementById("hamburger-btn").classList.toggle("open");
};
let btnOne = document.getElementById('hamburger-btn');
btnOne.onclick = toggleMenu;

function toggleMenuTwo() {
  document.getElementById("secondary-nav").classList.toggle("open");
  document.getElementById("hamburger-btn-two").classList.toggle("open");
};
let btnTwo = document.getElementById('hamburger-btn-two');
btnTwo.onclick = toggleMenuTwo;


// Script for Footer and Date stuff
const lastmod = document.querySelector('#last-mod')
lastmod.innerHTML = `<strong>Last Updated:</strong> ${document.lastModified}`;

let d = new Date();
let fullyear = d.getFullYear();
document.getElementById("this-year").textContent = fullyear;

// Script for Weather Api
const apiURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=38.99&lon=-77.10&exclude=hourly,minutely&units=imperial&appid=8f13cdab0cf5564b10325e74657c1297";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const iconsrc = `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
    const desc = jsObject.current.weather[0].description.toUpperCase().charAt(0) + jsObject.current.weather[0].description.substr(1);
    document.querySelector("#current-temp").textContent = jsObject.current.temp.toFixed(1);
    document.querySelector("#feels-like").textContent = jsObject.current.feels_like.toFixed(1);
    document.querySelector("#current-humidity").textContent = jsObject.current.humidity;
    document.querySelector("#current-wind").textContent = jsObject.current.wind_speed;
    document.querySelector("#weather-icon").setAttribute("src", iconsrc);
    document.querySelector("#weather-icon").setAttribute("alt", desc);
    document.querySelector("#weather-type").textContent = desc;
    // Day 2
    document.querySelector("#day-two-max").textContent = jsObject.daily[0].temp.max.toFixed(1);
    document.querySelector("#day-two-min").textContent = jsObject.daily[0].temp.min.toFixed(1);
    // Day 3
    document.querySelector("#day-three-max").textContent = jsObject.daily[1].temp.max.toFixed(1);
    document.querySelector("#day-three-min").textContent = jsObject.daily[1].temp.min.toFixed(1);
    // Day 4
    document.querySelector("#day-four-max").textContent = jsObject.daily[2].temp.max.toFixed(1);
    document.querySelector("#day-four-min").textContent = jsObject.daily[2].temp.min.toFixed(1);
    // Alerts 
    if(jsObject.alerts.start){
      //essentially if (jsObject.alerts.start) has a value then do the following
      document.querySelector("#weather-alerts-event").textContent = jsObject.alerts.event;
      document.querySelector("#weather-alerts-desc").textContent = jsObject.alerts.description;
    }
  });