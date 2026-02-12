/*Read three values (variables A, B and C), which are the three student's grades. Then, calculate the average, considering that grade A has weight 2, grade B has weight 3 and the grade C has weight 5. Consider that each grade can go from 0 to 10.0, always with one decimal place.

Input
The input file contains 3 values of floating points (double) with one digit after the decimal point.

Output
Print the message "MEDIA"(average in Portuguese) and the student's average according to the following example, with a blank space before and after the equal signal.

Input Samples	
5.0
6.0
7.0

Output Samples
MEDIA = 6.3
*/

lines = ["5.0","6.0", "7.0"]

function calculateAverage(noteOne, noteTwo, noteThree){
  let average = ( (noteOne * 2) + (noteTwo * 3) + (noteThree * 5)) /10
  if(average > 10 ) return 10
  if(average < 0 ) return 0

  return average

}

const noteOne = parseFloat(lines[0])
const noteTwo = parseFloat(lines[1])
const noteThree = parseFloat(lines[2])

average = calculateAverage(noteOne, noteTwo, noteThree)

console.log(`MEDIA = ${average.toFixed(1)}`)