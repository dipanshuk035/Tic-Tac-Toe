"use strict";

const perentBox = document.querySelector(".perent");
const box = document.querySelectorAll(".childs");
const players = document.querySelector(".players");
const radio = document.querySelector(".input-radio");
const playBtn = document.querySelector(".play-btn");
const login = document.querySelector(".login");
const overlay = document.querySelector(".overlay");
const massege = document.querySelector(".massege");
const congrats = document.querySelector(".congartulations");
const winnerName = document.querySelector(".winner-name");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const resetBtn = document.querySelector(".reset-btn");
console.log(radio);

let chance = true,
  count = 0;

var name1,
  name2,
  selectPlayer = false,
  playerNumber,
  isWinner = false,
  playersValue;

const winPettern = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [3, 4, 5],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [6, 7, 8],
];

players.addEventListener("click", function (e) {
  console.log(name1, name2);
  selectPlayer = true;
  if (e.target.value === "1") {
    player2.classList.add("hidden");
    playersValue = e.target.value;
  }
  if (e.target.value === "2") {
    playersValue = e.target.value;
    player2.classList.remove("hidden");
  }
  console.log(playersValue);
});
playBtn.addEventListener("click", function () {
  console.log(playersValue);
  if (playersValue === "1") {
    name1 = document.querySelector(".player1").value || "You";
    name2 = "Computer";
    playerNumber = 1;
    console.log("Hlelo");
  }

  if (playersValue === "2") {
    name1 = document.querySelector(".player1").value || "Player 1";
    name2 = document.querySelector(".player2").value || "Player 2";
    playerNumber = 2;
  }
  console.log(name1, name2);
  if (selectPlayer) {
    document.querySelector(".o-player").textContent = ` = ${name1}`;
    document.querySelector(".X-player").textContent = ` = ${name2}`;
    login.classList.add("hidden");
    overlay.classList.add("hidden");
    console.log(playerNumber);
    if (playerNumber == 1) {
      onePlayer(box);
    }
    if (playerNumber === 2) twoPlayers(box);
  } else {
    alert("Please Select Players");
  }
});
// box.forEach(function (el) {
// });
function twoPlayers(boxes) {
  boxes.forEach((box) => {
    box.addEventListener("click", function () {
      if (box.textContent === "" && isWinner === false) {
        if (chance) {
          box.textContent = "o";
          if (box.textContent == "o") box.classList.add("o-property");
        } else {
          box.textContent = "X";
          if (box.textContent == "X") box.classList.add("X-property");
        }
        count++;
        chance = !chance;
        if (count === 9 && isWinner === false) {
          massege.classList.remove("hidden");
          congrats.textContent = "Play Again";
          winnerName.textContent = "Game Tai";
        }
        checkWinner();
      }
    });
  });
}
function onePlayer(boxes) {
  // console.log(boxes[randomNum]);
  // boxes.forEach((box) => {
  console.log("hello ");
  boxes.forEach((el) => {
    el.addEventListener("click", function () {
      if (el.textContent === "" && isWinner === false) {
        let randomNum = Math.trunc(Math.random() * 8);
        el.textContent = "o";
        if (el.textContent == "o") el.classList.add("o-property");
        count++;
        if (count <= 8) {
          if (boxes[randomNum].textContent != "") {
            while (boxes[randomNum].textContent != "")
              randomNum = Math.trunc(Math.random() * 8);
          }
          boxes[randomNum].textContent = "X";

          boxes[randomNum].classList.remove("o-property");
          boxes[randomNum].classList.add("X-property");
          count++;
        }
        checkWinner();
        if (count === 9 && isWinner === false) {
          massege.classList.remove("hidden");
          congrats.textContent = "Play Again";
          winnerName.textContent = "Game Tai";
          return;
        }
      }
    });
    // });
  });
}
// function gameTai(check) {
// }
function checkWinner() {
  winPettern.forEach((el) => {
    const position1 = box[el[0]].textContent;
    const position2 = box[el[1]].textContent;
    const position3 = box[el[2]].textContent;
    if (
      position1 === position2 &&
      position2 === position3 &&
      position1 !== ""
    ) {
      massege.classList.remove("hidden");

      if (position1 === "o") {
        congrats.textContent = "Congartulations🎉";
        winnerName.textContent = `${name1} Winner`;
      }
      if (position1 === "X") {
        if (name2 == "Computer") {
          congrats.textContent = "Try Again";
          winnerName.textContent = `${name2} Winner`;
        } else {
          congrats.textContent = "Congartulations🎉";
          winnerName.textContent = `${name2} Winner`;
        }
      }
      overlay.classList.remove("hidden");
      isWinner = true;
    }
  });
}
const continou = document.querySelector(".continou");
const secondContainer = document.querySelector(".seconds");
const timer = document.querySelector(".timer");
continou.addEventListener("click", function () {
  timer.classList.remove("hidden");
  massege.classList.add("hidden");
  overlay.classList.add("hidden");
  let second = 5;
  const newGame = setInterval(() => {
    secondContainer.textContent = second;
    second--;
    if (second < 0) {
      resetGame();
      clearInterval(newGame);
      timer.classList.add("hidden");
      secondContainer.textContent = "";
    }
  }, 1000);
});
resetBtn.addEventListener("click", function () {
  resetGame();
});
function resetGame() {
  count = 0;
  chance = true;
  isWinner = false;
  box.forEach((b) => {
    b.textContent = "";
  });
}
// perentBox.addEventListener("cilck", function (e) {
//   if (e.target.classList.contains("childs")) {
//     console.log(randomNum);
//     // if (e.target.textContent === "") {
//     e.target.textContent = "o";
//     e.target.classList.add("o-property");
//     // if (box[randomNum].textContent != "") {
//     //   randomNum = Math.trunc(Math.random() * 8);
//     //   console.log(randomNum);
//     // }
//     // box[randomNum].textContent = "X";
//     // box[randomNum].classList.add("X-property");
//     // checkWinner();
//     // }
//   }
