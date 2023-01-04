/* Burger menu */

document.addEventListener("DOMContentLoaded", nav);

function nav() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-bar-menu");

  burger.addEventListener("click", () => {
    nav.classList.toggle("show");
    body.classList.add("noScroll");
    /*  body.classList.remove("noScroll"); */
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
const body2 = document.getElementsByTagName("body")[0];
popupwindow2.addEventListener("click", closePopupUx);
function openPopUpUx() {
  popupwindow2.classList.add("open-popup");
  body.classList.add("noScroll");
}
function closePopupUx() {
  popupwindow2.classList.remove("open-popup");
  body.classList.remove("noScroll");
}

/* 04_animation */
let popupwindow3 = document.getElementById("animation");
const body3 = document.getElementsByTagName("body")[0];
popupwindow3.addEventListener("click", closePopupAn);
function openPopUpAn() {
  popupwindow3.classList.add("open-popup");
  body.classList.add("noScroll");
}
function closePopupAn() {
  popupwindow3.classList.remove("open-popup");
  body.classList.remove("noScroll");
}
/* 05_indhold */
let popupwindow4 = document.getElementById("indhold");
const body4 = document.getElementsByTagName("body")[0];
popupwindow4.addEventListener("click", closePopupIn);
function openPopUpIn() {
  popupwindow4.classList.add("open-popup");
  body.classList.add("noScroll");
}
function closePopupIn() {
  popupwindow4.classList.remove("open-popup");
  body.classList.remove("noScroll");
}
