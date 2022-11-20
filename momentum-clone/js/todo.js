const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");

const replyForm = document.querySelector(".reply");
const toDoInput = document.querySelector(".reply__column:nth-child(2) input");

const message = document.querySelector(".message-row--own .message__buble");
const messageTime = document.querySelector(".message-row--own .message__time");

const TODOS_KEY = "toDos";

const USERNAME_KEY = "userName";
const savedUserName = localStorage.getItem(USERNAME_KEY);
console.log(`In local storege Id : ${savedUserName}`);

const userH1 = document.querySelector(".alt-header__title");

const savedToDos = localStorage.getItem(TODOS_KEY);
let toDos = [];

if (savedUserName === " " || savedUserName === null || savedUserName === "") {
  //show the form.
} else {
  //show the greeting.
  userH1.innerText = savedUserName;
}

function filterToDos(filterId) {}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  //event.target <- 버튼
  //   console.log(event.target);
  //   console.dir(event.target);
  console.log(`Delete ToDo : ${event.target.parentElement.innerText}`);
  const li = event.target.parentElement;

  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
  saveToDos();
}

function paintToDo(newToDoObject) {
  const li = document.createElement("li");
  li.id = newToDoObject.id;

  const span = document.createElement("span");
  span.innerText = newToDoObject.text;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.className = "todo-list__button";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();

  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const newToDo = toDoInput.value;
  toDoInput.value = "";

  message.innerText = newToDo;
  messageTime.innerText = `${hours}:${minutes}`;

  const newToDoObject = {
    id: Date.now(),
    text: newToDo,
  };

  toDos.push(newToDoObject);

  paintToDo(newToDoObject);
  saveToDos();

  const quote = document.querySelector(".message-row--quote .message__buble");
  const author = document.querySelector(".message-row--quote .message__author");
  const time = document.querySelector(".message-row--quote .message__time");

  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

  author.innerText = todaysQuote.author;
  quote.innerText = todaysQuote.quote;
  time.innerText = `${hours}:${minutes}`;

  document.querySelector(".message-row--quote img").src = todaysQuote.img;
}

replyForm.addEventListener("submit", handleToDoSubmit);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;

  parsedToDos.forEach(paintToDo);
  parsedToDos.forEach((item) => console.log("Load ToDo : ", item));
}
