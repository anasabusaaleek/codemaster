import { arr } from "./Register.js";
import { que } from "./EnglishJS.js";
let engbtn = document.getElementById("englishbuttun");
if (engbtn !== null) {
  engbtn.addEventListener("click", function (e) {
    console.log(sessionStorage.getItem("index"));
    window.open("../English.html", "_self");
  });
}
let techbtn = document.getElementById("techbtn");
if (techbtn !== null) {
  techbtn.addEventListener("click", function (e) {
    console.log(sessionStorage.getItem("index"));
    window.open("../technical.html", "_self");
  });
}
let infbtn = document.getElementById("infobtn");
if (infbtn !== null) {
  infbtn.addEventListener("click", function () {
    console.log("hee");
    window.open("../Info.Html"), "_self";
  });
}
let finish = document.getElementById("finsh");
let index = sessionStorage.getItem("index");
if (arr[index].EnRuslt != null) {
  engbtn.style.cssText = "opacity: 0.4;pointer-events: none;";
}
if (arr[index].techResult != null) {
  techbtn.style.cssText = "opacity: 0.4;pointer-events: none;";
}
if (arr[index].phone != null) {
  infbtn.style.cssText = "opacity: 0.4;pointer-events: none;";
  console.log("open");
}
if (
  infbtn.style.getPropertyValue("pointer-events") == "none" &&
  techbtn.style.getPropertyValue("pointer-events") == "none" &&
  engbtn.style.getPropertyValue("pointer-events") == "none"
) {
  finish.style.cssText = "opacity: 1;pointer-events:auto ;";
  finish.textContent = "Your Report";
}
finish.addEventListener("click", function () {
  window.open("../report.html", "_self");
});
