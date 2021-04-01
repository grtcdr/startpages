// 'username' will show up next to the greeting
const username = "grtcdr";

// Holds the greeting phrase
const determineGreet = hours => document.getElementById("greeting").innerText = `Good ${hours < 12 ? "Morning, " : hours < 18 ? "Afternoon, " : "Evening, "}` + username + '.';

// The page will determine what greeting to display depending
// on the time of day, as soon as it loads.
window.addEventListener('load', () => {
    let today = new Date();
    determineGreet(new Date().getHours());
    setTimeout(() => { document.getElementById("greeting").style.opacity = "1"; }, 150);
});