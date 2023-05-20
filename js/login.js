import { arr } from "./Register.js";

function login(email, password) {
  if (email !== "" && password !== "") {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (email === arr[i].Email && password === arr[i].Password) {
        count++;
        sessionStorage.setItem("index", i);
        window.open("./Home.html", "_self");
      }
    }
    if (count === 0) {
      alert("Not found");
      //       let x = document.getElementById("alert");
      //       x.style.display = "flex";
      //       x.style.transition = "0.3s";
    }
  } else {
    alert("please fill info ");
  }
  /********************** */
}

let log = document.getElementById("Login");
if (log !== null) {
  log.addEventListener("click", function (e) {
    console.log(sessionStorage.getItem("index"));
    let email = document.getElementById("LogEmail").value;
    let password = document.getElementById("LogPassword").value;
    console.log(email);
    console.log(password);
    e.preventDefault();
    login(email, password);
  });
}
