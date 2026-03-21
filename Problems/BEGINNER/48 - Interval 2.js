/*
Read an integer N. This N will be the number of integer numbers X that will be read.

Print how many these numbers X are in the interval [10,20] and how many values are out of this interval.
 

Input
The first line of input is an integer N (N < 10000), that indicates the total number of test cases.
Each case is an integer number X (-107 < X < 107).

 

Output
For each test case, print how many numbers are in and how many values are out of the interval.

Input Sample	
4
14
123
10
-25
Output Sample
2 in
2 out
*/

lines = ["4","14","123","10","-25"]



const numbers = lines.map( number => parseInt(number))
const X = numbers[0]

let numberOut = 0;
let numberIn = 0;
//console.log(numbers)
for(let index = 1; index <= X; index++){
  const value = numbers[index]
//console.log(value)
  if(value >=10 && value <=20){
//console.log(value)
    numberIn++
  }else{
    numberOut++
  }

}

console.log(`${numberIn} in`)
console.log(`${numberOut} out`)