let itemVar = ["Rock", "Paper", "Scissors"];

let playerNum = Math.floor(Math.random()* itemVar.length);
let playerResult = itemVar[playerNum];

let computerNum = Math.floor(Math.random()* itemVar.length);
let computerResult = itemVar[computerNum];

let message = `Player result: ${playerResult}. Computer result: ${computerResult} `

console.log(message);


if (playerNum === computerNum) {
    console.log("It's a tie!");
} else if (playerNum > computerNum) {

    if (computerNum === 0 && playerNum === 2) {
        console.log("Computer Wins!");
    } else {
        console.log("Player Wins!");
    }

} else if (playerNum < computerNum) {

    if (computerNum === 2 && playerNum === 0 ) {
        console.log("Player Wins!");
    } else {
        console.log("Computer Wins!");
    }
}