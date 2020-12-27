// You can change this variable to modify to the output of whoami
let username = "grtcdr";
// You can change this variable to modify the prompt's PS1
let PS1 = "$";

let commandTable = ["whoami", "date", "browser", "locale", "cores", "uname", "exit", "startpage", "clear", "help", "creator", "title", "echo", "d", "g"];
let diceCommands = ["whoami", "date", "browser", "locale", "cores", "uname", "startpage -v", "startpage -l", "startpage -c", "startpage -n", "help"];
document.getElementById("dollar").innerHTML = PS1;
let form = document.getElementById('command-line');
let input = document.getElementById('input');
let output = document.getElementById('output');
let help = document.getElementById("help-container");
let grid = document.getElementById("grid");
let helpExit = document.getElementById("help-exit");
let trollCount = 0;
let throwDice = false;
let seekingHelp = false;
let tag = document.createElement('a');
let text = document.createTextNode("https://github.com/grtcdr/startpages");
tag.appendChild(text);
tag.href = "https://github.com/grtcdr/startpages";
tag.id = "output";
tag.style.position = "absolute";
tag.style.top = "0px";
tag.style.left = "0px";
tag.style.width = "800px";
tag.style.textDecoration = "underline";

helpExit.addEventListener("click", () => {
  showHelpMenu(false);
});

helpExit.addEventListener("mouseover", () => {
  helpExit.style.cursor = "pointer";
});

document.querySelectorAll('a').forEach(item => {
  item.addEventListener('click', event => {
    document.body.style.cursor = "wait";
    item.style.cursor = "wait";
  })
});

document.querySelectorAll('grid-container').forEach(item => {
  item.addEventListener('click', event => {
    item.style.backgroundColor = "#51CB20";
  })
});

// Dice functionality: shuffles through certain commands
document.getElementById("dice").addEventListener("click", function (event) {
  let diceValue = Math.floor(Math.random() * diceCommands.length);
  input.value = diceCommands[diceValue];
  throwDice = true;
  evalInput(event);
  throwDice = false;
});

input.addEventListener("keypress", function (event) {
  if (event.key == 'Enter') {
    evalInput(event);
    input.value = '';
  }
  if (throwDice) {
    evalInput(event);
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
});