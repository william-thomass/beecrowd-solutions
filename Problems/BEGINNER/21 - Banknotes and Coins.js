/*
Read a value of floating point with two decimal places. This represents a monetary value. After this, calculate the smallest possible number of notes and coins on which the value can be decomposed. The considered notes are of 100, 50, 20, 10, 5, 2. The possible coins are of 1, 0.50, 0.25, 0.10, 0.05 and 0.01. Print the message “NOTAS:” followed by the list of notes and the message “MOEDAS:” followed by the list of coins.

Input
The input file contains a value of floating point N (0 ≤ N ≤ 1000000.00).

Output
Print the minimum quantity of banknotes and coins necessary to change the initial value, as the given example.

Input Sample	
576.73
Output Sample
NOTAS:
5 nota(s) de R$ 100.00
1 nota(s) de R$ 50.00
1 nota(s) de R$ 20.00
0 nota(s) de R$ 10.00
1 nota(s) de R$ 5.00
0 nota(s) de R$ 2.00
MOEDAS:
1 moeda(s) de R$ 1.00
1 moeda(s) de R$ 0.50
0 moeda(s) de R$ 0.25
2 moeda(s) de R$ 0.10
0 moeda(s) de R$ 0.05
3 moeda(s) de R$ 0.01

*/
//lines = ["576.73"]
//lines = ["4.00"]
lines = ["91.01"]

const value = parseFloat(lines[0]) 

let centavos = Math.round(value * 100) // transformar tudo em centavos para não dar erro.

const notes = [100, 50, 20, 10, 5, 2] 
const coins = [100, 50, 25, 10, 5, 1]

console.log("NOTAS:")
for(let note of notes){
  let notesInCents =  note * 100
  let amountsNotes = Math.floor( centavos / notesInCents)

  console.log(`${amountsNotes} nota(s) de R$ ${note.toFixed(2)}`)

  centavos = centavos % notesInCents
}

console.log("MOEDAS:")
for(let coin of coins){
  let amountsCoin =  Math.floor(centavos / coin)

  console.log(`${amountsCoin} moeda(s) de R$ ${(coin / 100).toFixed(2)}`)

  centavos = centavos % coin
}