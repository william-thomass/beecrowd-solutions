/*
Read two floating points' values of double precision A and B, corresponding to two student's grades. After this, calculate the student's average, considering that grade A has weight 3.5 and B has weight 7.5. Each grade can be from zero to ten, always with one digit after the decimal point. Don’t forget to print the end of line after the result, otherwise you will receive “Presentation Error”. Don’t forget the space before and after the equal sign.

Input
The input file contains 2 floating points' values with one digit after the decimal point.

Output
Print the message "MEDIA"(average in Portuguese) and the student's average according to the following example, with 5 digits after the decimal point and with a blank space before and after the equal signal.

Input Samples
5.0
7.1
Output Samples
MEDIA = 6.43182
*/

lines = ["10.0", "10.0"]

function calculateAverage(noteA, noteB){

  let average = ((noteA * 3.5) + (noteB * 7.5))/ 11
  
  if(average > 10)return 10
  
  if(average < 0) return 0
  
  return average
}

const noteA = parseFloat(lines[0])
const noteB = parseFloat(lines[1])

average = calculateAverage(noteA, noteB)

//console.log(average)
console.log(`MEDIA = ${average.toFixed(5)}`)