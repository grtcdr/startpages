// Big thanks to u/Teiem1 from reddit for refactoring the old code!

// Change this to your liking
var username = "grtcdr";
// Counter that is incremented when the search engines are cycled through
let se = 3;

// Listens for click event in se_button, once clicked, se increments by one and cycleSearchEngines() is called to update the icon, placeholder, and form action
document.getElementById("se_button").addEventListener("click", function() {
  se++;
  cycleSearchEngines(se);
});

function check_if_search_empty() {
  //Do not allow searching if the user clicks "GO" when the search box is empty
  if (document.forms["search_eng_form"]["q"].value == "") {
    event.preventDefault();
  }
} 

// The same as "onload"
window.addEventListener('load', (event) => {
  let today = new Date();
  let time = today.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  determineGreet(new Date().getHours());
  displayTime(time);
});

document.getElementById("go_btn").addEventListener("click", function(){
  check_if_search_empty();
}); 

// Called every 1000ms to update the time and display it
setInterval( function() {
  var today = new Date();
  var time = today.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  document.getElementById("time").innerHTML = time;
}, 1000);

function displayTime(time) 
{
  document.getElementById("time").innerHTML = time;
}

const determineGreet = hours => document.getElementById("greeting").innerText = `Good ${hours < 12 ? "Morning," : hours < 18 ? "Afternoon," : "Evening,"} ${username}!`;

const search_engines = [{
  src: "ddg.svg",
  placeholder: "DuckDuckGo",
  action: "https://www.duckduckgo.com/"
}, {
  src: "goog.svg",
  placeholder: "Google",
  action: "https://www.google.com/search?q="
},  {
  src: "reddit.svg",
  placeholder: "Reddit",
  action: "https://www.reddit.com/search?q="
},  {
  src: "youtube.svg",
  placeholder: "YouTube",
  action: "https://www.youtube.com/results?q="
}];

const cycleSearchEngines = se => {
  const curData = search_engines[(se+1) % search_engines.length];

  document.getElementById("se_icon").src = "icons/" + curData.src;
  document.getElementById("search").placeholder = "Searching with " + curData.placeholder;
  document.getElementById("search_eng_form").action = curData.action;
};