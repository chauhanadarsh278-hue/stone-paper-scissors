function random(num) {
    return Math.ceil(Math.random() * num);
}

// function to get computers choice among stone paper scissor
function getComputerChoice() {
    return random(3);
}
// function to ask user a choice among stone paper scissor
function getUserChoice(){
    let n = prompt("input the number of your choice between 1 and 3 where 1: stone, 2: paper, 3: scissors", 2);
    return n;
}
// function to convert number to stone paper and scissors.
 function numberToString( n){
     if(n==1){
         return "stone";
        }
        else if (n==2){
            return "paper";
        }
        else return "scissors";
    }
// we make a function to play a single round
    function playRound(humanChoice,computerChoice){
    let winner = "draw";
    // stone>scissors
    if(humanChoice=="stone" && computerChoice=="scissors") winner = "human";
    else if(humanChoice=="scissors" && computerChoice=="stone") winner="computer";
    // paper> stone
    else if(humanChoice=="paper" && computerChoice=="stone") winner="human";
    else if(humanChoice=="stone" && computerChoice=="paper") winner="computer";
    // scissors > paper
    else if(humanChoice=="scissors" && computerChoice=="paper") winner="human";
    else if (humanChoice=="paper" && computerChoice=="scissors") winner="computer";
    return winner;
}
// function to decide who wins
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for(let i = 1; i <= 5; i++){
        let humanSelection = numberToString(getUserChoice());
        let computerSelection = numberToString(getComputerChoice());
        let winner = playRound(humanSelection,computerSelection);
        if(winner=="human") {
            console.log("Hurray! you are the winner of this round. you chosen "+ humanSelection + " and computer chosen "+ computerSelection + ".");
            humanScore++;
        }
        else if(winner=="computer"){
            console.log("sorry! you lost this round, you chosen "+ humanSelection + " and computer chosen "+ computerSelection+". try again in next round.");
            computerScore++;
        }
        else console.log("game is draw both of you chosen " + computerSelection);
    }
    if(humanScore>computerScore) console.log("congratulations! you won the game by " + humanScore +"-" + computerScore +".");
    else if(humanScore<computerScore) console.log("alas! you lost the game by " + computerScore + "-" + humanScore + ".");
    else console.log("game is draw!, refresh to play again.");
}
playGame();