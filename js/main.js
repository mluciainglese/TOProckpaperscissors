// Computer choice

function getComputerChoice(){
    let random = Math.random()

    if (Math.random() < .33){
        return "Computer chose rock"
    } else if (Math.random() < .66){
        return "Computer chose paper"
    } else {
        return "Computer chose scissors"
    }
}

console.log(getComputerChoice())

// Human choice

function getHumanChoice(){
    let choice = prompt("Choose your player")
    
    if (choice.toLowerCase() === "rock"){
        return "You chose rock"
    } else if (choice.toLowerCase() === "paper"){
        return "You chose paper"
    } else if (choice.toLowerCase() === "scissors") {
        return "You chose scissors"
    } else {
        alert ("Please select a valid option")
        return getHumanChoice()
        
    }
}

console.log(getHumanChoice())