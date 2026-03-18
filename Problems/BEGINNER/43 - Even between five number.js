/*
Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.

Input
The input will be 5 integer values.

Output
Print a message like the following example with all letters in lowercase, indicating how many even numbers were typed.

Input Sample	
7
-5
6
-4
12

Output Sample
3 valores pares
*/

lines = ["7","-5", "6","-4","12"]

const numbers = lines.map(item => parseInt(item))

const even = numbers.filter(even => even % 2 === 0).length

//console.log(even)

console.log(`${even} valores pares`)