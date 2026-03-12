/*
Write a program that reads 6 numbers. These numbers will only be positive or negative (disregard null values). Print the total number of positive numbers.

Input
Six numbers, positive and/or negative.

Output
Print a message with the total number of positive numbers.

Input Sample	
7
-5
6
-3.4
4.6
12

Output Sample
4 valores positivos
*/

lines = ["7","-5","6","-3.4","4.6","12"]

const numbers = lines.map((item) => parseFloat(item))

let positive = 0

for(number of numbers){
  if(number > 0){
    positive++
  }
}

console.log(`${positive} valores positivos`)