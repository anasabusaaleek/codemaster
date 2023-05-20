document.getElementById("LogOut").addEventListener("click", function () {
  sessionStorage.removeItem("index");
  window.open("../login.html");
});
