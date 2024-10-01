/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { bottom } from "@popperjs/core";

function pickRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function checkIfRed(cardSuitChosen, topSymbol, number, bottomSymbol) {
  if (cardSuitChosen === "♥" || cardSuitChosen === "♦") {
    topSymbol.style.color = "red";
    number.style.color = "red";
    bottomSymbol.style.color = "red";
  } else {
    topSymbol.style.color = "black";
    number.style.color = "black";
    bottomSymbol.style.color = "black";
  }

  function performClick() {}
}

window.onload = function() {
  const cardSuits = ["♠", "♥", "♣", "♦"];

  const cardNumbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  let cardSuitChosen = pickRandomElement(cardSuits);
  let cardNumberChosen = pickRandomElement(cardNumbers);

  let topSymbol = document.querySelector(".top");
  topSymbol.innerHTML = cardSuitChosen;

  let number = document.querySelector(".number");
  number.innerHTML = cardNumberChosen;

  let bottomSymbol = document.querySelector(".bottom");
  bottomSymbol.innerHTML = cardSuitChosen;

  checkIfRed(cardSuitChosen, topSymbol, number, bottomSymbol);

  document.querySelector(".btn").addEventListener("click", event => {
    cardSuitChosen = pickRandomElement(cardSuits);
    cardNumberChosen = pickRandomElement(cardNumbers);
    topSymbol.innerHTML = cardSuitChosen;
    number.innerHTML = cardNumberChosen;
    bottomSymbol.innerHTML = cardSuitChosen;
    checkIfRed(cardSuitChosen, topSymbol, number, bottomSymbol);
  });

  let num = +document.querySelector(".clock").textContent.split(":")[1];
  let clock = document.querySelector(".clock");

  setInterval(() => {
    if (num === 0) document.querySelector(".btn").click();

    if (num > 0) {
      num -= 1;
    } else {
      num = 10;
    }

    clock.textContent = `00:${num < 10 ? "0" : ""}${num}`;
  }, 1000);

  document.getElementById("submit").addEventListener("click", event => {
    event.preventDefault();

    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
    let card = document.querySelector(".card");
    card.style.width = `${width}${width.includes("px") ? "" : "px"}`;
    card.style.height = `${height}${height.includes("px") ? "" : "px"}`;
  });

  document.getElementById("button").addEventListener("click", event => {
    let card = document.querySelector(".card");
    card.style.width = "320px";
    card.style.height = "450px";
    document.getElementById("width").value = "";
    document.getElementById("height").value = "";
  });
};
