const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const user_gretting = document.querySelector(".js-grettings");
const todo_gretting = document.querySelector(".js-toDoForm");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

// localStorage로 client단에 USER_LS 저장
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

// input에 입력 후 submit(엔터) 하면
// paintGretting으로 보여주고 saveName으로 저장
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGretting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGretting(text) {
  form.classList.remove(SHOWING_CN);
  user_gretting.classList.add(SHOWING_CN);
  todo_gretting.classList.add(SHOWING_CN);
  user_gretting.innerText = `Have a nice day "${text}" !!`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // user is not
    askForName();
  } else {
    // user is
    paintGretting(currentUser);
  }
}

function init() {
  loadName();
}

init();
