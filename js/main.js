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

function getHumanChoice(){
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
}

// set score

let humanScore = 0
let computerScore = 0

// function to play a single round

function playRound(humanChoice, computerChoice){
    if((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")){
        console.log("Congratulations, you get a point!")
        humanScore += 1
    } else if (humanChoice === computerChoice){
        console.log("It's a tie! Score remains the same")
    } else {
        console.log("Womp womp, computer gets a point!")
        computerScore += 1
    }
}


// function to play 5 rounds and deterine a winner

function playGame(){
    for (let roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++){
        
        // gets winner and logs it
        
        let humanSelection = getHumanChoice()
        console.log(`You chose ${humanSelection}`)
        let computerSelection = getComputerChoice()
        console.log(`Computer chose ${computerSelection}`)
        playRound(humanSelection, computerSelection)
        
        // logs scores into console

        console.log(`Your score = ${humanScore}`)
        console.log(`Computer score = ${computerScore}`)
    }

    console.log(`Your final score is ${humanScore}`)
    console.log(`Computer's final score is ${computerScore}`)

    if(humanScore < computerScore){
        console.log("Such a pity, the computer beat you. Better luck next time!")
    } else if (computerScore < humanScore){
        console.log("Congratulations! You win the game!")
    } else {
        console.log("Oh noes, it's a tie!")
    }
    console.log("Please refresh the page to play again")
}

playGame()