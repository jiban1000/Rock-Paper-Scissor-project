let Score =  JSON.parse(localStorage.getItem('Score')) || {
    wins:0,
    losses:0,
    ties:0,
  };
  
 updateScoreElement();


  function PlayGame(playerMove) {
    const computerMove = pickedComputerMove();
    let result = "";

    if (playerMove === "Rock") {
      if (computerMove === "Rock") {
        result = "Tie";
      } else if (computerMove === "Paper") {
        result = "You lose";
      } else {
        result = "You win";
      }
    } else if (playerMove === "Paper") {
      if (computerMove === "Rock") {
        result = "You win";
      } else if (computerMove === "Paper") {
        result = "Tie";
      } else {
        result = "You lose";
      }
    } else if (playerMove === "Scissors") {
      if (computerMove === "Rock") {
        result = "You lose";
      } else if (computerMove === "Paper") {
        result = "You win";
      } else {
        result = "Tie";
      }
    }

    // Update score correctly
    if (result === "You win") {
      Score.wins += 1;
    } else if (result === "You lose") {
      Score.losses += 1;
    } else if (result === "Tie") {
      Score.ties += 1;
    }

    localStorage.setItem('Score',JSON.stringify(Score));

    updateScoreElement();
    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You  
  <img src="image/${playerMove}.jpg" class="move-icon">
  <img src="image/${computerMove}.jpg" class="move-icon">
  computer`;




    
    
  }

  function updateScoreElement (){
    document.querySelector('.js-score').innerHTML = `Wins: ${Score.wins}, Losses: ${Score.losses}, Ties: ${Score.ties}`;


  }

  function pickedComputerMove() {
    const randomNumber = Math.random();
    let computerMove = "";

    if (randomNumber < 1 / 3) {
      computerMove = "Rock";
    } else if (randomNumber < 2 / 3) {
      computerMove = "Paper";
    } else {
      computerMove = "Scissors";
    }
    return computerMove;
  }