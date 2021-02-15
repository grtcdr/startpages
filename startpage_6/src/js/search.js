let input = document.getElementById("input");
let form = document.getElementById("search-bar");
let indicator = document.getElementById("search-engine-indicator");

// Available search engines to cycle through
let search_engines = ["Google", "DuckDuckGo", "Github", "StackOverflow", "Reddit"];

const MIN_SEARCH_ENGINE_INDEX = 0;
const MAX_SEARCH_ENGINE_INDEX = search_engines.length - 1;
let search_engine_index = 0;

// Search function: Gets called on 'Enter' keypress
// and depending on which search engine is currently selected
function duckduckgo_search(str) {
  if (str !== "") {
    search_query = "https://duckduckgo.com/?q=" + str;
    window.location.replace(search_query);
  }
}

// Search function: Gets called on 'Enter' keypress
// and depending on which search engine is currently selected
function google_search(str) {
  if (str !== "") {
    search_query = "https://www.google.com/search?q=" + str;
    window.location.replace(search_query);
  }
}

// Search function: Gets called on 'Enter' keypress
// and depending on which search engine is currently selected
function github_search(str) {
  if (str !== "") {
    search_query = "https://github.com/search?q=" + str;
    window.location.replace(search_query);
  }
}

// Search function: Gets called on 'Enter' keypress
// and depending on which search engine is currently selected
function reddit_search(str) {
  if (str !== "") {
    search_query = "https://www.reddit.com/search/?q=" + str;
    window.location.replace(search_query);
  }
}

// Search function: Gets called on 'Enter' keypress
// and depending on which search engine is currently selected
function stackoverflow_search(str) {
  if (str !== "") {
    search_query = "https://stackoverflow.com/search?q=" + str;
    window.location.replace(search_query);
  }
}

// Search function: Gets called on 'Enter' keypress
// and depending on which search engine is currently selected
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

input.addEventListener("keypress", function (event) {
  if (event.key == 'Enter') {
    search_engine_index == 0 ? google_search(input.value)
      : search_engine_index == 1 ? duckduckgo_search(input.value)
      : search_engine_index == 2 ? github_search(input.value)
      : search_engine_index == 3 ? stackoverflow_search(input.value)
      : reddit_search(input.value)
    input.blur();
  }
});


document.addEventListener("keypress", function (event) {
  switch (event.key) {
    // Focus on the search bar when pressing 's'
    case 's':
      if (document.activeElement !== input)
        input.focus();
      break;
    // Switch to next search engine when pressing 'j'
    case 'j':
      if ((search_engine_index < MAX_SEARCH_ENGINE_INDEX) && (document.activeElement !== input)) {
        search_engine_index++;
        indicator.innerHTML = "Searching with " + search_engines[search_engine_index];
        // Show the search engine indicator for
        // 1.5 seconds and then hide it
        indicator.style.opacity = "1";
        setTimeout(() => {
          indicator.style.opacity = "0";
        }, 1500);
      }
      break;
    // Switch to previous search engine when pressing 'k'
    case 'k':
      if ((search_engine_index > MIN_SEARCH_ENGINE_INDEX) && (document.activeElement !== input)) {
        search_engine_index--;
        indicator.innerHTML = "Searching with " + search_engines[search_engine_index];
        // Show the search engine indicator for
        // 1.5 seconds and then hide it
        indicator.style.opacity = "1";
        setTimeout(() => {
          indicator.style.opacity = "0";
        }, 1500);
      }
      break;
    // Display current search engine when pressing '?'
    case '?':
      if (document.activeElement !== input) {
        indicator.innerHTML = "Searching with " + search_engines[search_engine_index];
        // Show the search engine indicator for
        // 1.5 seconds and then hide it
        indicator.style.opacity = "1";
        setTimeout(() => {
          indicator.style.opacity = "0";
        }, 1500);
      }
      break;
    default:
      return;
  }
});

// Remove focus from the search bar when pressing 'Escape'
document.addEventListener("keydown", function (event) {
  if (event.key == "Escape") {
    input.blur();
  }
}); 