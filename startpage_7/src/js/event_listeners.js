let input = document.getElementById("input");
let form = document.getElementById("search-bar");

// Prevents form from reloading the page on submit.
form.addEventListener("submit", (event) => {
    event.preventDefault();
});

// Calls the appropriate search function depending
// on the index of the currently selected search engine.
input.addEventListener("keypress", function (event) {
    if (event.key == 'Enter') {
        search_engine_index == 0 ? search_with_duckduckgo(input.value)
            : search_engine_index == 1 ? search_with_google(input.value)
                : search_engine_index == 2 ? search_with_github(input.value)
                    : search_engine_index == 3 ? search_with_stackoverflow(input.value)
                        : search_with_reddit(input.value)
        input.blur();
    }
});

// Handles the functionality of the search bar, such as
// scrolling through the search engines, focusing/unfocusing the bar.
document.addEventListener("keypress", function (event) {
    switch (event.key) {
        // Focus on the search bar when pressing 's'
        case 's':
            if (document.activeElement !== input)
                input.focus();
            break;
        // Switch to next search engine when pressing 'j'
        case 'j':
            increment_search_engine();
            break;
        // Switch to previous search engine when pressing 'k'
        case 'k':
            decrement_search_engine();
            break;
        default:
            return;
    }
});

// Removes focus from the search bar when pressing 'Escape'
document.addEventListener("keydown", function (event) {
    if (event.key == "Escape") {
        input.blur();
    }
});