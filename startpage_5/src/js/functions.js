function showHelpMenu(state) {
  seekingHelp = state;
  if (state) {
    input.value = '';
    output.innerHTML = '';
    grid.style.display = "none";
    help.style.display = "flex";
    setTimeout(() => grid.style.opacity = "0", 500);
    setTimeout(() => help.style.opacity = "1", 500);
    document.getElementById("help-text").innerHTML = "Supported commands: whoami, date, locale, cores, browser, uname, help, clear<br><br>Supported commands that use flags/arguments: startpage -l/-v/-c/-n, title, echo<br><br>Mode specific commands: exit";
  }
  else {
    input.focus();
    input.value = '';
    output.innerHTML = '';
    grid.style.display = "grid";
    help.style.display = "none";
    setTimeout(() => grid.style.opacity = "1", 500);
    setTimeout(() => help.style.opacity = "0", 500);
    document.getElementById("help-text").innerHTML = "";
  }
}

function startpage(arg){
  switch (arg)
  {
    case "-l":
      output.innerHTML = '';
      output.appendChild(tag);
    break;
    case "-v":
      output.innerHTML = "alpha-1.1";
    break;
    case "-c":
      output.innerHTML = "Made with &#9829; by grtcdr";
    break;
    case "-n":
      output.innerHTML = "Quīnque";
    break;
    default:
      output.innerHTML = "startpage doesn't recognize this argument, try -v, -l, -c or -n"
  }
}

function ddg(string, arg){
  if (arg == null)
      output.innerHTML = "To search the web (using duckduckgo) run for example: d cool startpages"
  else
  {
    search_query = "https://duckduckgo.com/?q=" + string.replace("d ", '');
    window.location.replace(search_query);
  }
}

function goog(string, arg){
  if (arg == null)
      output.innerHTML = "To search the web (using google) run for example: g cool startpages"
  else
  {
    search_query = "https://www.google.com/search?q=" + string.replace("g ", '');
    window.location.replace(search_query);
  }
}

//  Commands are case-sensitive

//  Supported commands: 
//    whoami, date, locale, cores, browser, uname, help, clear

//  Supported commands that use flags/arguments:
//    startpage, title, echo, d, g

//  To search the web (using duckduckgo) run for example: d cool startpages
//  To search the web (using google) run for example: g cool startpages

//  Mode specific commands:
//    exit

//  startpage command supports the following arguments:
//    -c  -v  -l  -n

function evalInput(event) {
  let str = input.value.trim().replace(/\s+/g, ' ');
  const [command, argument] = str.split(' ');
  if (commandTable.includes(command)) {
    trollCount = 0;
    if (command == "help")
      showHelpMenu(true);
    else if (command == "exit" && seekingHelp)
      showHelpMenu(false);
    else if (command == "exit" && !seekingHelp)
      window.close();
    else if (command == "d")
      ddg(str, argument);
    else if (command == "g")
      goog(str, argument);
    else if (command == "whoami")
      output.innerHTML = username;
    else if (command == "startpage" && argument != null)
      startpage(argument);
    else if (command == "date")
      output.innerHTML = new Date();
    else if (command == "browser")
      output.innerHTML = detectBrowser();
    else if (command == "uname")
      output.innerHTML = detectOperatingSystem();
    else if (command == "locale")
      output.innerHTML = detectLanguage();
    else if (command == "cores")
      output.innerHTML = detectCores();
    else if (command == "clear")
      output.innerHTML = '';
    else if (command == "title" && argument != null)
      document.title = str.replace("title ", '');
    else if (command == "echo" && argument != null)
      output.innerHTML = str.replace("echo ", '');
  }
  else {
    output.innerHTML = trollCount == 0 ? "I don't know the answer to this." :
      trollCount == 1 ? "I still don't know the answer to this." :
        trollCount == 2 ? "I really don't know..." :
          trollCount == 3 ? "We both have things to do!" :
            trollCount == 4 ? "Oh stop it would you!" : ">:(";
    trollCount++;
  }
}