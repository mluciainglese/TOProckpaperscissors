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

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice){
    if((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")){
        console.log("Congratulations, you win!")
        humanScore += 1
    } else if (humanChoice === computerChoice){
        console.log("It's a tie!")
    } else {
        console.log("Womp womp, you lose!")
        computerScore += 1
    }
}

let humanSelection = getHumanChoice()
console.log(`You chose ${humanSelection}`)
let computerSelection = getComputerChoice()
console.log(`Computer chose ${computerSelection}`)
playRound(humanSelection, computerSelection)

console.log(`Your score = ${humanScore}`)
console.log(`Computer score = ${computerScore}`)