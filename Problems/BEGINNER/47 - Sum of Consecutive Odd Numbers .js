/*
Sum of Consecutive Odd Numbers I
Adapted by Neilor Tonin, URI  Brazil

Timelimit: 1
Read two integer values X and Y. Print the sum of all odd values between them.

Input
The input file contain two integer values.

Output
The program must print an integer number. This number is the sum off all odd values between both input values that must fit in an integer number.

Sample Input	Sample Output
6
-5

5

15
12

13

12
12

0
*/

lines = ["12","12"]

const [X, Y] = lines.map(value => parseInt(value))
//console.log(X, Y)

let sumOdd = 0 

for(let value = Y + 1; value < X;value++){
  //console.log(value)
  if(value % 2 !== 0){
   // console.log(value)
    sumOdd += value
  }
}

console.log(sumOdd)