export class Users {
  constructor(
    Email,
    Password,
    ConfirmPassword,
    Name,
    Date,
    phoneNumber,
    Education,
    EnRuslt,
    techResult
  ) {
    this.Email = Email;
    this.Password = Password;
    this.ConfirmPassword = ConfirmPassword;
    this.Name = Name;
    this.Date = Date;
    this.phoneNumber = phoneNumber;
    this.Education = Education;
    this.EnRuslt = EnRuslt;
    this.techResult = techResult;
  }
}
export let arr = JSON.parse(localStorage.getItem("Users")) || [];
//arr[]
console.log(arr);
 function register(email, Password, rePassword) {
  document.getElementById("PasswordReg").style.backgroundColor = "white";
  document.getElementById("RePassword").style.backgroundColor = "white";
  document.getElementById("EmailLabelReg").textContent = "Email";
  document.getElementById("EmailLabelReg").style.color = "white";
  document.getElementById("EmailReg").style.backgroundColor = "white";
  document.getElementById("PasswordLabelReg").textContent = "password";
  document.getElementById("PasswordLabelReg").style.Color = "white";
  document.getElementById("RegForm").textContent = "";
  if (
    email.trim() !== "" &&
    Password.trim() !== "" &&
    rePassword.trim() !== ""
  ) {
    if (email.includes("@")) {
      if (Password.length >= 8) {
        if (Password == rePassword) {
          if (arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
              if (email === arr[i].Email) {
                let wrong = document.createElement("span");
                wrong.textContent = "The email is already exist";
                wrong.style.cssText =
                  "width:100%; color:red;text-align:center;margin-top:10px;";
                document.getElementById("RegForm").appendChild(wrong);
                return;
              }
            }
          }
          let user = new Users(email, Password, rePassword);
          //we check the three value up there
          arr.push(user);
          localStorage.setItem("Users", JSON.stringify(arr));
          window.open("./login.html", "_self");
        } else {
          let wrong = document.createElement("span");
          wrong.textContent = " The Password doesn't match ";
          wrong.style.cssText =
            "width:100%; color:red;text-align:center;margin-top:10px;";
          document.getElementById("PasswordReg").style.backgroundColor = "Red";
          document.getElementById("RePassword").style.backgroundColor = "Red";
          document.getElementById("RegForm").appendChild(wrong);
        }
      } else {
        //if the password is less than 8 characters
        let wrong = document.createElement("div");
        wrong.style.cssText =
          "width:100%; color:red;text-align:center;margin-top:10px;";
        document.getElementById("PasswordReg").style.backgroundColor = "Red";
        document.getElementById("PasswordLabelReg").appendChild(wrong);
      }
    } else {
      let wrong = document.createElement("span");
      wrong.textContent = " Enter a valid email ";
      wrong.style.cssText =
        "width:100%; color:red;text-align:center;margin-top:10px;";
      document.getElementById("EmailReg").style.backgroundColor = "Red";
      document.getElementById("EmailLabelReg").appendChild(wrong);
    }
  } else {
    let wrong = document.createElement("div");
    wrong.textContent = "Please Fill All Fields ";
    wrong.style.cssText =
      "width:100%; color:red;text-align:center;margin-top:10px;";
    document.getElementById("RegForm").appendChild(wrong);
  }
}
let r = document.getElementById("Register");
if (r !== null) {
  r.addEventListener("click", function (e) {
    let email = document.getElementById("EmailReg").value;
    let Password = document.getElementById("PasswordReg").value;
    let rePassword = document.getElementById("RePassword").value;
    console.log(email);
    e.preventDefault();
    register(email, Password, rePassword);
  });
}
