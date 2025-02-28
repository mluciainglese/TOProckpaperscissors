// set score

let humanScore = 0
let computerScore = 0

// Computer choice

function getComputerChoice(){
    let randomNum = Math.random()

    if (randomNum < .33){
        return "rock"
    } else if (randomNum < .66){
        return "paper"
    } else {
        return "scissors"
    }
}

// Human choice

let rockButton = document.querySelector(".rock")
let paperButton = document.querySelector(".paper")
let scissorsButton = document.querySelector(".scissors")

rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()))
paperButton.addEventListener("click", () =>  playRound("paper", getComputerChoice()))
scissorsButton.addEventListener("click", () =>  playRound("scissors", getComputerChoice()))

// No need for the function below anymore

/* function getHumanChoice(){
    let choice = prompt("Choose your player")
    
    if (choice.toLowerCase() === "rock"){
        return "rock"
    } else if (choice.toLowerCase() === "paper"){
        return "paper"
    } else if (choice.toLowerCase() === "scissors") {
        return "scissors"
    } else {
        alert ("Please select a valid option")
        return getHumanChoice()
        
    }
} */


// function to play a round until someone gets 5 points

function playRound(humanChoice, computerChoice){
    if((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")){
        document.querySelector(".roundResult").innerText = "Congratulations, you get a point!"
        document.querySelector(".yourScore").innerText = humanScore += 1
    } else if (humanChoice === computerChoice){
        document.querySelector(".roundResult").innerText = "You both chose the same, no points awarded"
    } else {
        document.querySelector(".roundResult").innerText = "Womp womp, computer gets a point!"
        document.querySelector(".compScore").innerText = computerScore += 1
    }
    checkWinner()
    
}

// End of game

function checkWinner(){
    if (humanScore === 5 || computerScore === 5){
        let buttons = document.querySelectorAll("button")
        buttons.forEach(button => {
            button.disabled = true
        });
    
        if(humanScore === 5){
        document.querySelector(".finalScore").innerText = "Congratulations! You win the game! No need to brag tho..."
        } else if (computerScore === 5){
        document.querySelector(".finalScore").innerText = "Such a pity, the computer beat you. Please don't cry!"
        } 

        setTimeout(() => {
            alert("Game over! Please refresh the page to play again")
            }, 100)
    }
} 



// function to play 5 rounds and deterine a winner (not needed anymore)

/* function playGame(){
    for (let roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++){
        
        // gets winner and logs it
        
        let humanSelection = getHumanChoice()
        console.log(`You chose ${humanSelection}`)
        let computerSelection = getComputerChoice()
        console.log(`Computer chose ${computerSelection}`)
        playRound(humanSelection, computerSelection)
        
        // logs scores into console

        document.querySelector(".finalScore").innerText = `Your score = ${humanScore}`
        document.querySelector(".finalScore").innerText = `Computer score = ${computerScore}`
    }

    console.log(`Your final score is ${humanScore}`)
    console.log(`Computer's final score is ${computerScore}`)

    if(humanScore < computerScore){
        document.querySelector("finalScore").innerText = "Such a pity, the computer beat you. Better luck next time!"
    } else if (computerScore < humanScore){
        document.querySelector("finalScore").innerText = "Congratulations! You win the game!"
    } else {
        document.querySelector("finalScore").innerText = "Oh noes, it's a tie!"
    }
    console.log("Please refresh the page to play again")
}

playGame() */