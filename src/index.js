function updateTime() {
// New York City
let nycElement = document.querySelector("#new-york");
if (nycElement) {
let nycDateElement = nycElement.querySelector(".date");
nycDateElement.innerHTML = moment().format("dddd MMMM Do, YYYY");
let nycTime = moment().tz("America/New_York");

let nycTimeElement= nycElement.querySelector(".time");
nycTimeElement.innerHTML = nycTime.format("hh:mm:ss [<small>]A[</small>]");
}
// Buenos Aires
let baElement = document.querySelector("#buenos-aires");
if (baElement) {
let baDateElement = baElement.querySelector(".date");
baDateElement.innerHTML = moment().format("dddd MMMM Do, YYYY");
let baTime = moment().tz("America/Argentina/Buenos_Aires");

let baTimeElement = baElement.querySelector(".time");
baTimeElement.innerHTML = baTime.format("hh:mm:ss [<small>]A[</small>]");
}

// Auckland
let aucklandElement = document.querySelector("#auckland");
if (aucklandElement) {
let aucklandDateElement = aucklandElement.querySelector(".date");
aucklandDateElement.innerHTML = moment().format("dddd MMMM Do, YYYY");
let aucklandTime = moment().tz("Pacific/Auckland");

let aucklandTimeElement = aucklandElement.querySelector(".time");
aucklandTimeElement.innerHTML = aucklandTime.format("hh:mm:ss [<small>]A[</small>]");
}
}


function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime= moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("dddd MMMM Do, YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("hh:mm:ss")}<small>${cityTime.format("A")}</small></div>
  </div>   
  `;

  citiesElement.innerHTML = citiesElement.innerHTML + `
  <div class="city">
    <div>
      <h2>New York</h2>
      <div class="date">${moment().tz("America/New_York").format("dddd MMMM Do, YYYY")}</div>
    </div>
    <div class="time">${moment().tz("America/New_York").format("hh:mm:ss")}<small>${moment().tz("America/New_York").format("A")}</small></div>
  </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);    
    
