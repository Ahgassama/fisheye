const main = document.getElementById("main");

function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.setAttribute("aria-hidden", "true");
  modal.setAttribute("role", "dialog");
  modal.style.display = "block";
  main.classList.add("opac");
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.setAttribute("aria-hidden", "false");
  modal.style.display = "none";
  main.classList.remove("opac");
  const form = document.querySelector("form");
  form.reset();
}
const sendBtn = document.querySelector(".contact");
sendBtn.setAttribute("aria-label", "envoyer");
const userSurname = document.querySelector(".surname");
userSurname.setAttribute("aria-label", "prénom");
const userName = document.querySelector(".name");
userName.setAttribute("aria-label", "nom");
const email = document.querySelector(".email");
email.setAttribute("aria-label", "e-mail");
const msg = document.querySelector(".msg");
msg.setAttribute("aria-label", "message");

function senduserSurname() {
  const surnameValue = userSurname.value;
  console.log(surnameValue);
}
userSurname.addEventListener("change", senduserSurname);

function sendName() {
  const nameValue = userName.value;
  console.log(nameValue);
}
userName.addEventListener("change", sendName);

function sendEmail() {
  const emailValue = email.value;
  console.log(emailValue);
}
email.addEventListener("change", sendEmail);

function sendMsg() {
  const msgValue = msg.value;
  console.log(msgValue);
}
msg.addEventListener("change", sendMsg);
