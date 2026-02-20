/*
Read three integers and sort them in ascending order. After, print these values in ascending order, a blank line and then the values in the sequence as they were readed.

Input
The input contains three integer numbers.

Output
Present the output as requested above.

Input Sample	
7 21 -14
Output Sample
-14
7
21

7
21
-14
*/

lines = ["7 21 -14"]

const numbers = lines[0].split(" ").map((item) => parseInt(item))

//console.log(numbers)

const numbersSorted = [...numbers].sort((a, b) => a - b)

numbersSorted.forEach(value => console.log(value))
console.log(" ")
numbers.forEach(value => console.log(value))

//console.log(numbersSorted)
/*
for(let i = 0; i < numbersSorted.length;i++){
  console.log(numbersSorted[i])
}
console.log(" ")
for(let i = 0; i < numbers.length;i++){
  console.log(numbers[i])
}
*/