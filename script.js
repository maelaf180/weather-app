let darkButton = document.getElementById("dark-mode");
let input = document.getElementById("inputValue");

input.addEventListener("keydown", (event) => {
     if (event.key == "Enter") {
          fetchWeather();
     }
});
async function fetchWeather() {
     let inputValue = document.getElementById("inputValue").value;

     try {
          const response =
               await fetch(`http://api.weatherapi.com/v1/current.json?key=15380eb88fbe443d821102709240804&q=${inputValue}&aqi=no
        Response Code`);
          const data = await response.json();
          console.log(data);
          changeWeather(data);
          return data;
     } catch (error) {
          console.error("Error fetching weather data: ", error);
          return null;
     }
}
function changeWeather(city) {
     let cities = document.getElementById("cities");
     let weather = document.getElementById("weather");
     let icons = document.getElementById("icons");

     cities.innerText = city.location.name;
     icons.setAttribute("src", city.current.condition.icon);
     weather.innerHTML = city.current.condition.text;
}
