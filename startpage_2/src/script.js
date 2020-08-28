// Change this to your username
var username = "grtcdr";
var mode = "dark";

const determineGreet = hours => document.getElementById("greeting").innerText = `Good ${hours < 12 ? "Morning," : hours < 18 ? "Afternoon," : "Evening,"} ${username}.`;

// The same as "onload"
window.addEventListener('load', (event) => {
    let today = new Date();
    let time = today.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    determineGreet(new Date().getHours());
    displayTime(time);
  });

setInterval( function() {
    var today = new Date();
    var time = today.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    document.getElementById("time").innerHTML = time;
}, 1000);

document.getElementById("mode").addEventListener("click", function(){
    if (mode == "dark") { 
        change_colors(mode);
        mode = "light";
    }
    else { 
        change_colors(mode);
        mode = "dark"
    }
    
    console.log(mode);
}); 

function displayTime(time) 
{
    document.getElementById("time").innerHTML = time;
}

function dark_colors()
{
    let link = document.getElementsByTagName('a');
    document.body.style.background="#0C131F";
    document.getElementById("greeting").style.color = "#dee3de";
    document.getElementById("mode").style.filter = "invert(100%) sepia(0%) saturate(1620%) hue-rotate(8deg) brightness(94%) contrast(88%)";
    for (i=0;i<link.length;i++) {
        link[i].style.color = "#bbb";
    }
}
function light_colors()
{
    let link = document.getElementsByTagName('a');
    document.body.style.background = "#FFE8D4";
    document.getElementById("mode").style.filter = "invert(58%) sepia(12%) saturate(482%) hue-rotate(148deg) brightness(94%) contrast(86%)";
    document.getElementById("greeting").style.color = "#767283";
    for (i=0;i<link.length;i++) {
    link[i].style.color = "#767283";
    }
}

function change_colors(mode)
{
    if (mode == "dark") { light_colors(); }
    else { dark_colors(); }
}

