/*
Read the start time and end time of a game, in hours. Then calculate the duration of the game, knowing that the game can begin in a day and finish in another day, with a maximum duration of 24 hours. The message must be printed in portuguese “O JOGO DUROU X HORA(S)” that means “THE GAME LASTED X HOUR(S)”

Input
Two integer numbers representing the start and end time of a game.

Output
Print the duration of the game as in the sample output.

Input Sample	
16 2
Output Sample
O JOGO DUROU 10 HORA(S)
*/

//lines = ["16 2"]
lines = ["2 16"]

const [startGame, endGame] = lines[0].split(" ").map(item => parseInt(item))
//console.log(startGame, endGame)
let duration

if( startGame === endGame){
  duration = 24
}else if( startGame < endGame){
  duration =  endGame - startGame
}else{
  duration = (24 - startGame) + endGame
}
console.log(`O JOGO DUROU ${duration} HORA(S)`)