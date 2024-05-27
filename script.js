
const apikey = "ef0d723d508fa7ef4c37bda5f73d514a";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".icon");

async function checkWeather(cityName) {
   const response = await fetch(apiurl + cityName + `&appid=${apikey}`);

   if (response.status == 404) {
       document.querySelector(".error").style.display = "block";
       document.querySelector(".weather").style.display = "none";
   } else {
       const data = await response.json();
       document.querySelector(".city").innerHTML = data.name;
       document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°c";
       document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
       document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

       if (data.weather[0].main=="Clouds") {
               weatherIcon.src = "images/clouds.png";
       }
      else  if (data.weather[0].main=="Clear") {
               weatherIcon.src = "images/clear.png";
      }
      else if (data.weather[0].main=="Rain") {
               weatherIcon.src = "images/rain.png";
       }
      else  if (data.weather[0].main=="Drizzle") {
               weatherIcon.src = "images/drizzle.png";
       }
      else  if (data.weather[0].main=="Mist") {
               weatherIcon.src = "images/mist.png";
       }
       

       document.querySelector(".weather").style.display = "block";
       document.querySelector(".error").style.display = "none";
   }
}

searchBtn.addEventListener("click", () => {
   if (searchInput.value.trim() !== "") {
       document.querySelector(".card").classList.add("expanded");
       checkWeather(searchInput.value);
   }
})
