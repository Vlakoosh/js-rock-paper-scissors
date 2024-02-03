const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    const playerCounter = document.querySelector(".player-score");
    const computerCounter = document.querySelector(".computer-score");

    //start the game
    const startGame = () => {
        const playButton = document.querySelector(".play-button button");
        const introScreen = document.querySelector(".play-button");
        const match = document.querySelector(".match")

        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.remove('fadeOut');
            match.classList.add('fadeIn')
        })
    }

    //play a match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function (){
                this.style.animation = "";
            });
        });
        //Computer options
        const computerOptions = ['rock', 'paper', 'scissors'];
        options.forEach(option => {
            option.addEventListener('click', function () {
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                //player choice
                const playerChoice = this.textContent;

                //update images
                playerHand.src = `./images/rock.png`;
                computerHand.src = `./images/rock.png`;

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
                setTimeout(() => {
                    //update images
                    playerHand.src = `./images/${playerChoice}.png`;
                    computerHand.src = `./images/${computerChoice}.png`;
                    //compare hands and give score
                    compareHands(playerChoice, computerChoice);
                    updateScore();
                }, 1800)

            })
        })


    }

    const compareHands = (playerChoice, computerChoice) => {
        //update text
        const result = document.querySelector('.result');
        if(playerChoice === computerChoice){
            result.textContent = "It's a tie";
            return;
        }
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                result.textContent = "Player wins!";
                playerScore++;
                return;
            }
            if (computerChoice === 'paper'){
                result.textContent = "Computer wins!";
                computerScore++;
                return;
            }
        }
        if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                result.textContent = "Player wins!";
                playerScore++;
                return;
            }
            if (computerChoice === 'scissors'){
                result.textContent = "Computer wins!";
                computerScore++;
                return;
            }
        }
        if (playerChoice === 'scissors') {
            if (computerChoice === 'paper') {
                result.textContent = "Player wins!";
                playerScore++;
                return;
            }
            if (computerChoice === 'rock'){
                result.textContent = "Computer wins!";
                computerScore++;
            }
        }
    }

    const updateScore = () => {
        playerCounter.querySelector('p').textContent = playerScore.toString();
        computerCounter.querySelector('p').textContent = computerScore.toString();
    }

    //call all the inner functions
    startGame();
    playMatch();
}

//start game
game();