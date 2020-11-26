const determineGreet = hours => document.getElementById("greeting").innerText = `Good ${hours < 12 ? "Morning." : hours < 18 ? "Afternoon." : "Evening."}`;

window.addEventListener('load', (event) => {
    let today = new Date();
    let time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    determineGreet(new Date().getHours());
    displayTime(time);
});

setInterval(function () {
    var today = new Date();
    var time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById("time").innerHTML = time;
}, 1000);

function displayTime(time) {
    document.getElementById("time").innerHTML = time;
}