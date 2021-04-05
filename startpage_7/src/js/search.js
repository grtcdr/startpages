// Available search engines to cycle through
let search_engines = ["DuckDuckGo", "Google", "Github", "StackOverflow", "Reddit"];

// Block cyclying the search engines past or below the constants' values
const MIN_SEARCH_ENGINE_INDEX = 0;
const MAX_SEARCH_ENGINE_INDEX = search_engines.length - 1;

// The index of the currently selected search engine
let search_engine_index = 0;

function decrement_search_engine() {
  if ((search_engine_index > MIN_SEARCH_ENGINE_INDEX) && (document.activeElement !== input)) {
    search_engine_index--;
    input.placeholder = "Searching with " + search_engines[search_engine_index];
  } else {
    search_engine_index = MAX_SEARCH_ENGINE_INDEX;
    input.placeholder = "Searching with " + search_engines[search_engine_index];
  }
}

function increment_search_engine() {
  if ((search_engine_index < MAX_SEARCH_ENGINE_INDEX) && (document.activeElement !== input)) {
    search_engine_index++;
    input.placeholder = "Searching with " + search_engines[search_engine_index];
  } else {
    search_engine_index = 0;
    input.placeholder = "Searching with " + search_engines[search_engine_index];
  }
}

/* 
The following functions are the different search engines and websites
the startpage can search with. Go ahead and add your own, but make sure
to update the 'search_engines' array with the name of the search engine.
*/

function search_with_duckduckgo(str) {
  if (str !== "") {
    search_query = "https://duckduckgo.com/?q=" + str;
    window.location.replace(search_query);
  }
}

function search_with_google(str) {
  if (str !== "") {
    search_query = "https://www.google.com/search?q=" + str;
    window.location.replace(search_query);
  }
}

function search_with_github(str) {
  if (str !== "") {
    search_query = "https://github.com/search?q=" + str;
    window.location.replace(search_query);
  }
}

function search_with_reddit(str) {
  if (str !== "") {
    search_query = "https://www.reddit.com/search/?q=" + str;
    window.location.replace(search_query);
  }
}

function search_with_stackoverflow(str) {
  if (str !== "") {
    search_query = "https://stackoverflow.com/search?q=" + str;
    window.location.replace(search_query);
  }
}