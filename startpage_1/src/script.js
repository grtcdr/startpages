/*Change this to your liking*/
var username = "grtcdr";
/*A simple counter that is incremented when the search engines are cycled through*/
var se = 3;
/* Search Engine is set to DuckDuckGo by default.
You can add any search engine you like, just make sure to add a condition in cycleSearchEngines(se)
Feel free to reorder the list*/
var search_engines=["ddg","google","reddit","youtube"];
var today = new Date();
var hours = today.getHours();
var time = today.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

function displayTime(time) 
{
  document.getElementById("time").innerHTML = time;
}

setInterval( function() {
  var today = new Date();
  var time = today.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  document.getElementById("time").innerHTML = time;
}, 1000);


function determineGreet(time)
{
  if (hours < 12)
  {
    document.getElementById("greeting").innerHTML = "Good Morning, " + username + "!";
  }
  else if (hours < 18)
  {
    document.getElementById("greeting").innerHTML = "Good Afternoon, " + username + "!";
  }
  else
  {
    document.getElementById("greeting").innerHTML = "Good Evening, " + username + "!";
  }
}

function cycleSearchEngines(se)
{
  se = (se+1)%(search_engines.length);
  if (search_engines[se] == "ddg")
  {
    document.getElementById("se_icon").src = "../icons/ddg.svg";
    document.getElementById("search").placeholder = "Searching with DuckDuckGo";
    document.getElementById("search_eng_form").action = "https://www.duckduckgo.com/";
  }
  else if (search_engines[se] == "google")
  {
    document.getElementById("se_icon").src = "../icons/goog.svg"
    document.getElementById("search").placeholder = "Searching with Google"
    document.getElementById("search_eng_form").action = "https://www.google.com/search?q=";
  }
  else if (search_engines[se] == "reddit")
  {
    document.getElementById("se_icon").src = "../icons/reddit.svg"
    document.getElementById("search").placeholder = "Searching with Reddit"
    document.getElementById("search_eng_form").action = "https://www.reddit.com/search?q=";
  }
  else if (search_engines[se] == "youtube")
  {
    document.getElementById("se_icon").src = "../icons/youtube.svg"
    document.getElementById("search").placeholder = "Searching with YouTube"
    document.getElementById("search_eng_form").action = "https://www.youtube.com/results?q=";
  }
return se;
}
