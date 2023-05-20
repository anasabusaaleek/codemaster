import { arr } from "./Register.js";
function report() {
  let index = sessionStorage.getItem("index");
  let techRes = arr[index].techResult;
  let engRes = arr[index].EnRuslt;
  document.getElementById("EnglishTest").innerHTML = `${engRes}/15`;
  document.getElementById("TechnicalTest").innerHTML = `${techRes}/10`;
}
document.getElementById("reportPage").addEventListener("load", report());
