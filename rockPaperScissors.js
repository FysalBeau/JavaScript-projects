const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Input must be rock, paper or scissors.");
  }
};

function getComputerChoice() {
  randomNumGen = Math.floor(Math.random() * 3);
  switch (randomNumGen) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "This game was a tie!";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "computer won!";
    } else if (computerChoice === "scissors") {
      return "user won!";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "computer won!";
    } else if (computerChoice === "rock") {
      return "user won!";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "computer won!";
    } else if (computerChoice === "paper") {
      return "user won!";
    }
  }
}

function playGame(input) {
  let userChoice = getUserChoice(input);
  let computerChoice = getComputerChoice();
  console.log(`userChoice is ${userChoice}`);
  console.log(`computerChoice is ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame("rock");
