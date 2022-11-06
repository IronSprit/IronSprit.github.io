//const loginButton = document.querySelector("#login-form Button");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

const savedUserName = localStorage.getItem(USERNAME_KEY);
console.log(`In local storege Id : ${savedUserName}`);

// const link = document.querySelector("a");

// function handleClickLoginButton() {
//   const userName = loginInput.value;
//   const userNameLength = userName.length;
//   //html(required, maxlength) 속성으로 대체 가능.
//   if (userName === "") {
//     alert("Please write your name.");
//   } else if (userNameLength > 15) {
//     alert("Your name is too long.");
//   } else {
//     textName = userName;
//   } //div -> form 으로 수정

//   //form으로 만들면 문제점이 있다. Input이 button type 이면 자동 submit 이 된다. (새로고침 됨)

//   textName = userName;

//   console.log(textName);
// }

if (savedUserName === " " || savedUserName === null || savedUserName === "") {
  //show the form.
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greeting.
  paintGreetings(savedUserName);
}

function onLoginSubmit(event) {
  event.preventDefault(); //q브라우져의 기본 행동을 막아준다.

  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);

  paintGreetings(loginInput.value);
}

function paintGreetings(userName) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${userName}`;
}

// function handleLinkClick(event) {
//   event.preventDefault(); //q브라우져의 기본 행동을 막아준다.
//   console.log(link.value);
// }

//loginButton.addEventListener("click", handleClickLoginButton);
// link.addEventListener("click", handleLinkClick);
