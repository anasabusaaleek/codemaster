import { arr } from "./Register.js";
function infoo() {
  let name = document.getElementById("name");
  let date = document.getElementById("date");
  let phone = document.getElementById("phone");
  let select = document.getElementById("select");
  let degree = select;
  let btn = document.querySelector("#send");
  let error = document.createElement("span");
  let valid_phone = error.cloneNode();
  let valid_date = error.cloneNode();
  let valid_edu = error.cloneNode();

  error.setAttribute("class", "color");
  valid_phone.setAttribute("class", "color");
  valid_date.setAttribute("class", "color");
  valid_edu.setAttribute("class", "color");

  btn.addEventListener("click", function (event) {
    console.log("sdadsadsa");

    // validation form
    let validName = false;
    let validDate = false;
    let validPhone = false;
    let validDegree = false;
    if (
      name.value !== "" &&
      date.value !== "" &&
      phone.value !== "" &&
      degree.value !== ""
    ) {
      validName = true;
      validDate = true;
      validPhone = true;
      validDegree = true;
      let index = sessionStorage.getItem("index");
      arr[index].name = name.value;
      arr[index].date = date.value;
      arr[index].phone = phone.value;
      arr[index].degree = degree.value;
      console.log(arr);
      localStorage.setItem("Users", JSON.stringify(arr));
      event.preventDefault();
      window.open("../Home.html");
      if (name.value.length <= 2) {
        error.textContent = "enter 3 charctar at least";
      } else {
        error.textContent = "";
      }
      if (phone.value.length < 10 && phone.value.length > 10) {
        valid_phone.textContent = "phone number must be 10 digits";
      } else if (phone.value.length == 10) {
        valid_phone.textContent = "";
      }

      if (date.value.length == 10) {
        valid_date.textContent = "";
      }

      if (degree.value.length > 0) {
        valid_edu.textContent = "";
      }
      if (
        phone.value.length == 10 &&
        name.value.length > 2 &&
        date.value.length == 10 &&
        degree.value > 0
      ) {
        localStorage.setItem("user", JSON.stringify(user));
        console.log(JSON.parse(localStorage.getItem("user")));
      }
    }

    if (
      validName == false ||
      validDate == false ||
      validPhone == false ||
      validDegree == false
    ) {
      // valid name
      name.before(error);
      if (name.value.length < 1) {
        error.textContent = "enter your name";
      } else if (name.value.length < 3) {
        error.textContent = "enter 3 char at least";
      } else {
        error.textContent = "";
      }
      // valid phone
      phone.before(valid_phone);
      if (phone.value.length == 0) {
        valid_phone.textContent = "enter your phone number";
      } else if (phone.value.length < 10) {
        valid_phone.textContent = "phone number must be 10 digits";
      } else {
        valid_phone.textContent = "";
      }

      // valid date
      valid_date.textContent = "put your Birth date";
      date.before(valid_date);
      if (date.value.length > 0) {
        valid_date.textContent = "";
      }
      // valid education level
      valid_edu.textContent = "select your degree";
      degree.before(valid_edu);
      console.log(degree.value.length);
      if (degree.value.length > 0) {
        valid_edu.textContent = "";
      }
      //  prevent normal flow
      event.preventDefault();
    }
    event.preventDefault();
  });
}
let inf = document.getElementById("infopage");
if (inf !== null) {
  inf.addEventListener("load", infoo());
}
