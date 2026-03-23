/*
Read an integer value N. After, read these N values and print a message for each value saying if this value is odd, even, positive or negative. In case of zero (0), although the correct description would be "EVEN NULL", because by definition zero is even, your program must print only "NULL", without quotes.

Input
The first line of input is an integer N (N < 10000), that indicates the total number of test cases. Each case is a integer number X (-107 < X <107)..

Output
For each test case, print a corresponding message, according to the below example. All messages must be printed in uppercase letters and always will have one space between two words in the same line.

Input Sample	
4
-5
0
3
-4
Output Sample
ODD NEGATIVE
NULL
ODD POSITIVE
EVEN NEGATIVE
*/

lines = ["4", "-5", "0", "3", "-4"]

const numbers = lines.map(Number)

const X = numbers[0]

for(let i = 1; i <= X; i++){
  const value = numbers[i]
  if(value === 0 ){
    console.log("NULL")
  }else if( value < 0 && value % 2 !== 0){
    console.log("ODD NEGATIVE")
  }else if( value > 0 && value % 2 !== 0){
    console.log("ODD POSITIVE")
  }else if( value < 0 && value % 2 === 0){
    console.log("EVEN NEGATIVE")
  }else(
    console.log("EVEN POSITIVE")
  )

}