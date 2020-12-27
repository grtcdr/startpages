let nav = window.navigator;
let userAg = nav.userAgent;

function detectOperatingSystem() {
    if      (userAg.indexOf("Windows") != -1) return "Windows OS";
    else if (userAg.indexOf("Mac") != -1) return "MacOS";
    else if (userAg.indexOf("Linux") != -1) return "GNU/Linux";
    else return "Unknown";
}

function detectCores() {
    return nav.hardwareConcurrency;
}

function detectBrowser() {
    let browser = 0;
    browser = userAg.indexOf("Firefox") > -1 ? browser = "Firefox" :
              userAg.indexOf("Opera") > -1 || userAg.indexOf("OPR") > -1 ? browser = "Opera" :
              userAg.indexOf("Edge") > -1 ? browser = "Edge" :
              userAg.indexOf("Chrome") > -1 ? browser = "Chrome" :
              userAg.indexOf("Safari") > -1 ? browser = "Safari" : "Unknown";
    return browser;
}

function detectLanguage() {
    return window.navigator.language;
}