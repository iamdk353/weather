// 1. *Clear Sky:* Sky Blue to Sunny Yellow
// 2. *Partly Cloudy:* Light Blue to Pale Yellow
// 3. *Overcast:* Gray to Light Gray
// 4. *Rainy:* Deep Blue to Cool Gray
// 5. *Showers:* Steel Blue to Light Gray
// 6. *Thunderstorm:* Dark Gray to Electric Blue
// 7. *Snowy:* Icy Blue to White
// 8. *Blizzard:* Arctic Blue to Frosty White
// 9. *Foggy:* Misty Gray to Soft White
// 10. *Windy:* Turquoise to Silver Gray

let city;
let currentWeather = "clear";
let cities = [
  "Tokyo",
  "Delhi",
  "Shanghai",
  "São Paulo",
  "Mexico City",
  "Cairo",
  "Mumbai",
  "Beijing",
  "Dhaka",
  "Osaka",
  "New York",
  "Karachi",
  "Buenos Aires",
  "Chongqing",
  "Istanbul",
  "Kolkata",
  "Manila",
  "Lagos",
  "Rio de Janeiro",
  "Tianjin",
  "Kinshasa",
  "Guangzhou",
  "Los Angeles",
  "Moscow",
  "Shenzhen",
  "Lahore",
  "Bengaluru",
  "Paris",
  "Bogotá",
  "Jakarta",
  "Chennai",
  "Lima",
  "Bangkok",
  "Seoul",
  "Nagoya",
  "Hyderabad",
  "London",
  "Tehran",
  "Chicago",
  "Chengdu",
  "Nanjing",
  "Wuhan",
  "Ho Chi Minh City",
  "Luanda",
  "Ahmedabad",
  "Kuala Lumpur",
  "Xi'an",
  "Hong Kong",
  "Dongguan",
  "Hangzhou",
  "Foshan",
  "Shenyang",
  "Riyadh",
  "Baghdad",
  "Santiago",
  "Surat",
  "Madrid",
  "Suzhou",
  "Pune",
  "Harbin",
  "Houston",
  "Dallas",
  "Toronto",
  "Dar es Salaam",
  "Miami",
  "Belo Horizonte",
  "Singapore",
  "Philadelphia",
  "Atlanta",
  "Fukuoka",
  "Khartoum",
  "Barcelona",
  "Johannesburg",
  "Saint Petersburg",
  "Qingdao",
  "Dalian",
  "Washington",
  "Yangon",
  "Alexandria",
  "Jinan",
  "Guadalajara",
];
const main = document.querySelector("#main");
const mainStat = document.querySelector("#main-stat");
const input = document.querySelector("#input");
const search = document.querySelector("#search");
const iconHolder = document.querySelector("#icon");
const cityHolder = document.querySelector("#city");
const content = document.querySelectorAll("#content");
let place;
let temp = document.querySelectorAll("#temp");
let rightData = document.querySelectorAll("#data");
async function getWeather(city) {
  console.log("called the weather function");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=39d121fc5683d32e5bc388e6d08eea70&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  if (data.cod === 200) {
    console.log("success");
  } else {
    console.log("error");
    alert("erron in city name");
    input.value = "";
    return 0;
  }
  console.log(data);
  let temp1 = data.main.temp;
  let temp0 = data.main.temp_min;
  let temp2 = data.main.temp_max;
  currentWeather = data.weather[0].main;

  Apply(colors[currentWeather]);
  ApplyIcon(icon[currentWeather]);
  postInfo(cityHolder, data.name);
  postInfo(mainStat, data.weather[0].description.toUpperCase());
  postInfo(
    temp[0],
    `<span class="material-symbols-outlined align-middle">
      thermometer_loss
    </span> 
    Minimum ${temp0}° C`
  );

  postInfo(
    temp[1],
    `<span class="material-symbols-outlined align-middle">
thermostat
</span> Normal ${temp1}° C`
  );
  postInfo(
    temp[2],
    `<span class="material-symbols-outlined align-middle">
device_thermostat
</span> Maximum ${temp2}° C`
  );
  postInfo(
    rightData[0],
    ` <span class="material-symbols-outlined align-middle">
humidity_percentage
</span>${data.main.humidity}%`
  );
  postInfo(
    rightData[1],
    ` <span class="material-symbols-outlined align-middle">
visibility
</span> ${parseFloat((data.visibility / 1000).toFixed(2))} KM`
  );
  postInfo(
    rightData[2],
    ` <span class="material-symbols-outlined">
wind_power
</span> ${data.wind.speed} KM/H`
  );
  animate();
}
let colors = {
  Clear: `linear-gradient(135deg, hsla(64, 77%, 44%, 1) 0%, hsla(48, 78%, 44%, 1) 7%, hsla(183, 20%, 46%, 1) 27%, hsla(197, 94%, 52%, 1) 100%)`,
  Clouds: `linear-gradient(225deg, hsla(64, 77%, 44%, 1) 0%, hsla(48, 78%, 44%, 1) 5%, hsla(182, 25%, 40%, 1) 14%, hsla(197, 97%, 13%, 1) 100%)`,
  overcast: `linear-gradient(45deg, hsla(180, 16%, 51%, 1) 0%, hsla(0, 23%, 17%, 1) 100%)`,
  Fog: `linear-gradient(45deg, hsla(180, 16%, 51%, 1) 0%, hsla(0, 23%, 17%, 1) 100%)`,
  Rain: `linear-gradient(0deg, hsla(213, 74%, 46%, 1) 0%, hsla(214, 53%, 49%, 1) 27%, hsla(229, 5%, 39%, 1) 61%, hsla(0, 0%, 22%, 1) 100%)`,
  Mist: `linear-gradient(0deg, hsla(213, 74%, 46%, 1) 0%, hsla(214, 53%, 49%, 1) 27%, hsla(229, 5%, 39%, 1) 61%, hsla(0, 0%, 22%, 1) 100%)`,
  Haze: `linear-gradient(0deg, hsla(213, 74%, 46%, 1) 0%, hsla(214, 53%, 49%, 1) 27%, hsla(229, 5%, 39%, 1) 61%, hsla(0, 0%, 22%, 1) 100%)`,
  Drizzle: `linear-gradient(0deg, hsla(213, 74%, 46%, 1) 0%, hsla(214, 53%, 49%, 1) 27%, hsla(229, 5%, 39%, 1) 61%, hsla(0, 0%, 22%, 1) 100%)`,
  Snow: `linear-gradient(0deg, hsla(214, 50%, 54%, 1) 0%, hsla(0, 0%, 99%, 1) 100%)`,
  Smoke: `linear-gradient(0deg, hsla(213, 74%, 46%, 1) 0%, hsla(214, 53%, 49%, 1) 27%, hsla(229, 5%, 39%, 1) 61%, hsla(0, 0%, 22%, 1) 100%)`,
};
let icon = {
  Clear: `<img src="./assets/sun.png" id="icon">`,
  Clouds: `<img src="./assets/partly-cloudy.png" id="icon">`,
  Fog: `<img src="./assets/foggy.png" id="icon">`,
  Mist: `<img src="./assets/mist.png" id="icon">`,
  Haze: `<img src="./assets/mist.png" id="icon">`,
  Snow: `<img src="./assets/snowy.png" id="icon">`,
  Rain: `<img src="./assets/rain.png" id="icon">`,
  Smoke: `<img src="./assets/windy.png" id="icon">`,
};

function Apply(color) {
  main.style.background = color;
}
function ApplyIcon(img) {
  iconHolder.innerHTML = img;
}
input.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) getWeather(input.value);
});
search.addEventListener("click", () => {
  place = input.value.trim();
  getWeather(place);
});
function postInfo(ele, content) {
  ele.innerHTML = content;
}

function animate() {
  const tl = gsap.timeline();
  tl.fromTo(cityHolder, 0.25, { opacity: 0, y: 30 }, { opacity: 1, y: -20 });
  tl.to("#icon", 0.25, { opacity: 1 });
  tl.fromTo(content[0], 0.1, { x: 0 }, { x: 20 });
  hover(content[0]);
  tl.fromTo(content[1], 0.1, { x: 0 }, { x: 20 });
  hover(content[1]);
  tl.fromTo(content[2], 0.1, { x: 0 }, { x: 20 });
  hover(content[2]);
}

function hover(ele) {
  ele.style.backdropFilter = "blur(0.5)";
  ele.style.opacity = "1";
  setTimeout(() => {
    ele.style.backdropFilter = "";
    ele.style.opacity = "";
  }, 250);
}
