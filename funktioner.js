/* Burger menu */

document.addEventListener("DOMContentLoaded", nav);

function nav() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-bar-menu");

  burger.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

/* portfolie popup */
/* 02_web */
const popupwindow1 = document.getElementById("web");
const body = document.getElementsByTagName("body")[0];
popupwindow1.addEventListener("click", closePopupWeb);
function openPopUpWeb() {
  popupwindow1.classList.add("open-popup");
  body.classList.add("noScroll");
}
function closePopupWeb() {
  popupwindow1.classList.remove("open-popup");
  body.classList.remove("noScroll");
}
/* 03_ux */
let popupwindow2 = document.getElementById("ux");
function openPopUpUx() {
  popupwindow2.classList.add("open-popup");
}
function closePopupUx() {
  popupwindow2.classList.remove("open-popup");
}
/* 04_animation */
let popupwindow3 = document.getElementById("animation");
function openPopUpAn() {
  popupwindow3.classList.add("open-popup");
}
function closePopupAn() {
  popupwindow3.classList.remove("open-popup");
}
/* 05_indhold */
let popupwindow4 = document.getElementById("indhold");
function openPopUpIn() {
  popupwindow4.classList.add("open-popup");
}
function closePopupIn() {
  popupwindow4.classList.remove("open-popup");
}
