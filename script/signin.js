document.querySelector("#form").addEventListener("submit", signinfunc);

function signinfunc(event) {
  event.preventDefault();
  let useremail = document.querySelector("#email").value;
  let userpassword = document.querySelector("#password").value;
  // console.log(useremail, typeof useremail);
  // console.log(userpassword, typeof userpassword);
  let x = localStorage.getItem("email");
  let y = localStorage.getItem("password");
  // console.log(x, typeof x);
  // console.log(y, typeof y);

  if (x === useremail && y === userpassword) {
    alert("signin sucessfull");
  } else if (x != useremail && y != userpassword) {
    alert("Wrong username & password");
  } else if (x != useremail) {
    alert("Wrong username");
  } else {
    alert("wrong passward");
  }
  window.open("index.html");
}
