/*
The Greatest
Adapted by Neilor Tonin, URI  Brazil

Timelimit: 1
Make a program that reads 3 integer values and present the greatest one followed by the message "eh o maior". Use the following formula:



Input
The input file contains 3 integer values.

Output
Print the greatest of these three values followed by a space and the message “eh o maior”.

Input Samples	
7 14 106

Output Samples
106 eh o maior
*/

lines = ["7 14 106"]

const [numberOne, numberTwo, numberThree] = lines[0].split(" ").map(item => parseInt(item))

const greatestOneTwo = ((numberOne + numberTwo) + Math.abs( numberOne - numberTwo )) /2

if(greatestOneTwo < numberThree){
  console.log(`${numberThree} eh o maior`)
}else{
   console.log(`${greatestOneTwo} eh o maior`)
}

/*
or
console.log(`${greatestOneTwo} eh o maior`)
const theGreatest = Math.max(numberOne, numberTwo, numberThree)
console.log(`${theGreatest} eh o maior`)
*/
