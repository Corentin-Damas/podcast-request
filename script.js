"use strict";

const alert = document.querySelector(".alert");
const mail = document.querySelector(".emailInput");
const request = document.querySelector(".btnReq");

mail.addEventListener("click", function () {
  if (mail.value === "Email Adress") {
    mail.value = "";
  }
});

const saveMail = function () {
  let mailtest = mail.value;
  return mailtest;
};

const checkMail = function (mail) {
  const symboleTest = /\S+@\S+\.\S+/;
  return symboleTest.test(mail);
};

request.addEventListener("click", function () {
  saveMail();
  console.log(mail.value);
  console.log(!checkMail(mail.value));
  if (!checkMail(mail.value)) {
    document.querySelector(".alert").textContent = "Oops try again to see ! ";
    document.querySelector(".alert").classList.add("nope");
  } else if (checkMail(mail.value)) {
    document.querySelector(".alert").classList.remove("nope");
    document.querySelector(".alert").textContent = "Email valide, thank you !";
  }
});
