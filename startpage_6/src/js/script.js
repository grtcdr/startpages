const username = "grtcdr";
const determineGreet = hours => document.getElementById("greeting").innerText = `Good ${hours < 12 ? "Morning, " : hours < 18 ? "Afternoon, " : "Evening, "}` + username + '.';

window.addEventListener('load', () => {
    let today = new Date();
    determineGreet(new Date().getHours());
    setTimeout(() => { document.getElementById("greeting").style.opacity = "1"; }, 100);
});