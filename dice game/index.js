function diceGame() {
  const deletedCrap = document.querySelector(".delete-crap");
  if (deletedCrap !== null) {
    deletedCrap.remove();
  }
  let firstNum = Math.floor(Math.random() * 6) + 1;
  let secondNum = Math.floor(Math.random() * 6) + 1;
  if (firstNum > secondNum) {
    document.querySelector(".main-header").innerText = "player 1 won!";
    const flag = document.createElement("span");
    flag.innerHTML = "💩";
    document.getElementsByClassName("body").item(0).insertBefore(flag, document.getElementsByClassName("body").item(0).children[0]);
    flag.classList.add("crap-right");
    flag.classList.add("delete-crap");
  } else if (firstNum < secondNum) {
    document.querySelector(".main-header").innerText = "player 2 won!";
    const flag = document.createElement("span");
    flag.innerHTML = "💩";
    document.getElementsByClassName("body").item(0).insertBefore(flag, document.getElementsByClassName("body").item(0).children[1]);
    flag.classList.add("crap-left");
    flag.classList.add("delete-crap");
  } else
    document.querySelector(".main-header").innerText = "it's a tie";
  const change1 = convertElement(firstNum);
  const change2 = convertElement(secondNum);
  const dice1 = document.querySelector(".first-dice");
  const dice2 = document.querySelector(".second-dice");
  dice1.removeAttribute("class");
  dice2.removeAttribute("class");
  dice1.setAttribute("class", change1.getAttribute("class"));
  dice1.classList.add("first-dice");
  dice2.setAttribute("class", change2.getAttribute("class"));
  dice2.classList.add("second-dice");
}

function convertElement(number) {
  switch (number) {
    case 1:
      const diceOne = document.querySelectorAll(".one");
      return diceOne[diceOne.length - 1];
    case 2:
      const diceTwo = document.querySelectorAll(".two");
      return diceTwo[diceTwo.length - 1];
    case 3:
      const diceThree = document.querySelectorAll(".three");
      return diceThree[diceThree.length - 1];
    case 4:
      const diceFour = document.querySelectorAll(".four");
      return diceFour[diceFour.length - 1];
    case 5:
      const diceFive = document.querySelectorAll(".five");
      return diceFive[diceFive.length - 1];
    case 6:
      const diceSix = document.querySelectorAll(".six");
      return diceSix[diceSix.length - 1];
  }
}
