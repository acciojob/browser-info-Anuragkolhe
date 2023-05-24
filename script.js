//your JS code here. If required.
var browserName = navigator.appName;
var version = navigator.appVersion;
// display the information on the page
var browserInfo = document.getElementById("browser-info");
browserInfo.innerHTML = "You are using " + browserName + " version " + version;