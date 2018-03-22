import "./stylesheets/main.css";

// Small helpers you might want to keep
import "./helpers/context_menu.js";
import "./helpers/external_links.js";

// ----------------------------------------------------------------------------
// Everything below is just to show you how it works. You can delete all of it.
// ----------------------------------------------------------------------------

import { remote } from "electron";
import jetpack from "fs-jetpack";
//import { greet } from "./hello_world/hello_world";
import env from "env";

const app = remote.app;
const appDir = jetpack.cwd(app.getAppPath());

var moment = require('moment');
require('moment-countdown');

var momentDurationFormatSetup = require("moment-duration-format");
momentDurationFormatSetup(moment);

// Holy crap! This is browser window with HTML and stuff, but I can read
// files from disk like it's node.js! Welcome to Electron world :)
const manifest = appDir.read("package.json", "json");

function addZero(digit){
  if(digit  <10) {return "0"+digit;}else{return ""+digit;}
}
const osMap = {
  win32: "Windows",
  darwin: "macOS",
  linux: "Linux"
};

document.querySelector("#app").style.display = "block";
//document.querySelector("#greet").innerHTML = greet();

//document.querySelector("#os").innerHTML = osMap[process.platform];
//document.querySelector("#author").innerHTML = manifest.author;
//document.querySelector("#env").innerHTML = env.name;
//document.querySelector("#electron-version").innerHTML =
//  process.versions.electron;

setInterval(function(){
  var ahora = moment();
  var cup = moment("20180614 10:00", "YYYYMMDD HH:mm");

  var diffTime = cup
    .diff( ahora);
  var duration = moment.duration(diffTime);
  var
    days = cup.diff(ahora, 'days'),
    hrs = duration.hours(),
    mins = duration.minutes(),
    secs = duration.seconds();


  //console.log(cup.diff(ahora, "days")    + "d");
  //console.log(cup.diff(ahora, "hours") + "h"); // "7m"
  //console.log(cup.diff(ahora, "minutes") + "m"); // "7m"
  //console.log(cup.diff(ahora, "seconds") + "s"); // "1s"


  console.log(
    moment(cup - ahora)
      .format('D[ day(s)] H[ hour(s)] m[ minute(s)] s[ second(s) ago.]')
  );

  //document.querySelector("#greet").innerHTML = moment("2018-6-14").countdown().toString();
  //document.querySelector("#greet").innerHTML =  days + ' days ' +  hrs + ' hrs ' + mins + ' mins ' + secs + ' sec';
  document.querySelector("#dias").innerHTML = addZero(days);
  document.querySelector("#horas").innerHTML = addZero(hrs);
  document.querySelector("#minutos").innerHTML = addZero(mins);
  document.querySelector("#segundos").innerHTML = addZero(secs);
  //alert("Hello");
}, 1000);
