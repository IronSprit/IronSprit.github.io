const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input:first-child");
const loginButton = document.querySelector("#login-form input:last-child");

const USERNAME_KEY = "userName";

const savedUserName = localStorage.getItem(USERNAME_KEY);
console.log(`In local storege Id : ${savedUserName}`);

if (savedUserName === " " || savedUserName === null || savedUserName === "") {
  //show the form.
} else {
  //show the greeting.
  //location.replace("chat.html");
}

function onLoginSubmit(event) {
  event.preventDefault(); //q브라우져의 기본 행동을 막아준다.

  console.log(loginInput.value);
  localStorage.setItem(USERNAME_KEY, loginInput.value);

  loginForm.action = "chat.html";
  loginForm.method = "get";

  location.replace("chat.html");
}

loginButton.addEventListener("click", onLoginSubmit);
