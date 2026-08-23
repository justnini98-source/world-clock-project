function updateTime() {
// New York City
let nycElement = document.querySelector("#new-york");
let nycDateElement = nycElement.querySelector(".date");
nycDateElement.innerHTML = moment().format("dddd MMMM Do, YYYY");
let nycTime = moment().tz("America/New_York");

let nycTimeElement= nycElement.querySelector(".time");
nycTimeElement.innerHTML = nycTime.format("hh:mm:ss [<small>]A[</small>]");

// Buenos Aires
let baElement = document.querySelector("#buenos-aires");
let baDateElement = baElement.querySelector(".date");
baDateElement.innerHTML = moment().format("dddd MMMM Do, YYYY");
let baTime = moment().tz("America/Argentina/Buenos_Aires");

let baTimeElement = baElement.querySelector(".time");
baTimeElement.innerHTML = baTime.format("hh:mm:ss [<small>]A[</small>]");

// Auckland
let aucklandElement = document.querySelector("#auckland");
let aucklandDateElement = aucklandElement.querySelector(".date");
aucklandDateElement.innerHTML = moment().format("dddd MMMM Do, YYYY");
let aucklandTime = moment().tz("Pacific/Auckland");

let aucklandTimeElement = aucklandElement.querySelector(".time");
aucklandTimeElement.innerHTML = aucklandTime.format("hh:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);