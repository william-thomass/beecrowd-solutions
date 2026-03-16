/*
Positives and Average
Adapted by Neilor Tonin, URI  Brazil

Timelimit: 1
Read 6 values that can be floating point numbers. After, print how many of them were positive. In the next line, print the average of all positive values typed, with one digit after the decimal point.

Input
The input consist in 6 numbers that can be integer or floating point values. At least one number will be positive.

Output
The first output value is the amount of positive numbers. The next line should show the average of the positive values ​typed.

Input Sample	
7
-5
6
-3.4
4.6
12

Output Sample
4 valores positivos
7.4
*/

lines = ["7","-5","6","-3.4","4.6","12"]

const numbers = lines.map(item => parseFloat(item))

//console.log(numbers)

let sum = 0
let amount = 0

for(number of numbers){
  if(number > 0){
    sum += number
    amount += 1
  }
}

console.log(`${amount} valores positivos`)
console.log(`${(sum/amount).toFixed(1)}`)