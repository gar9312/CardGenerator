// eslint-disable
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const cardSuits = ["♦", "♥", "♠", "♣"];
  const cardNumbers = [
    "A",
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
    "K"
  ];

  updateCard();

  // Agregar un evento de clic al botón de cambio
  const changeButton = document.getElementById("changeBtn");
  changeButton.addEventListener("click", function() {
    updateCard();
  });

  function updateCard() {
    let randomSuit = Math.floor(Math.random() * 4);
    let randomNumber = Math.floor(Math.random() * 12);

    // Obtener los elementos HTML
    const topCardSide = document.getElementById("topCardSide");
    const middleCardSide = document.getElementById("middleCardSide");
    const bottomCardSide = document.getElementById("bottomCardSide");

    // Asignar el contenido HTML a los elementos
    topCardSide.innerHTML = cardSuits[randomSuit];
    middleCardSide.innerHTML = cardNumbers[randomNumber];
    bottomCardSide.innerHTML = cardSuits[randomSuit];

    // Rotar el elemento bottomCardSide
    bottomCardSide.style.transform = "rotate(180deg)";

    // Cambiar el color del texto según el palo de la carta
    if (cardSuits[randomSuit] == "♦" || cardSuits[randomSuit] == "♥") {
      topCardSide.style.color = "red";
      bottomCardSide.style.color = "red";
    } else {
      topCardSide.style.color = "black";
      bottomCardSide.style.color = "black";
    }
  }
};
