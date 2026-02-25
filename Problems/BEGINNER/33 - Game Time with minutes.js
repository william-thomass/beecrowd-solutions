/*
Read the start time and end time of a game, in hours and minutes (initial hour, initial minute, final hour, final minute). Then print the duration of the game, knowing that the game can begin in a day and finish in another day,

Obs.: With a maximum game time of 24 hours and the minimum game time of 1 minute.

Input
Four integer numbers representing the start and end time of the game.

Output
Print the duration of the game in hours and minutes, in this format: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” . Which means: the game lasted XXX hour(s) and YYY minutes.

Input Sample	
7 8 9 10
Output Sample
O JOGO DUROU 2 HORA(S) E 2 MINUTO(S)
*/

lines = ["7 8 9 10"]

const [startHours, startMinutes, endHours, endMinutes] = lines[0].split(" ").map( item => parseInt( item ))

const startTotalMinutes = ( startHours * 60) + startMinutes 
const endTotalMinutes = ( endHours * 60) + endMinutes 

let durationMinutes = endTotalMinutes - startTotalMinutes

if(durationMinutes <= 0){
  durationMinutes =  durationMinutes + (24 * 60)
}

const hours = Math.floor( durationMinutes / 60)
const minutes = durationMinutes % 60

console.log(`O JOGO DUROU ${hours} HORA(S) E ${minutes} MINUTO(S)`)