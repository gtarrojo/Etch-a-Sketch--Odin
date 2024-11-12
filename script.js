"use strict";

const container = document.querySelector(".container");
const btnChange = document.querySelector("button");

const getRandomColor = function (element) {
  const red = Math.trunc(Math.random() * 255);
  const green = Math.trunc(Math.random() * 255);
  const blue = Math.trunc(Math.random() * 255);

  element.style.backgroundColor = `RGB(${red}, ${green}, ${blue})`;
};

const createGrid = function (size) {
  container.innerHTML = "";
  for (let i = 0; i < size * size; i++) {
    const newDiv = document.createElement("div");
    container.appendChild(newDiv);
  }
  const squares = document.querySelectorAll(".container div");
  squares.forEach(function (square) {
    square.style.flex = `1 1 calc(100% / ${size})`;
    square.style.height = `calc(100% / ${size})`;
  });
  squares.forEach((square) =>
    square.addEventListener("mouseenter", () => getRandomColor(square))
  );
};

const changeGrid = function () {
  const input = Number(prompt("Give me a number between 1 and 100")) || 16;

  if (input >= 1 && input <= 100) {
    createGrid(input);
  } else {
    changeGrid();
  }
};

createGrid(16);

btnChange.addEventListener("click", changeGrid);

// color change
