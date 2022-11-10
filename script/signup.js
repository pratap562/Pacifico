document.querySelector("#signupform").addEventListener("submit", formfunc);

function formfunc(event) {
  // event.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  // window.location.href = "signin.html";
  window.open("signin.html");
}

console.log("xyz");
