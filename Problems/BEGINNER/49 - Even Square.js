/*
Read an integer N. Print the square of each one of the even values from 1 to N including N if it is the case.

Input
The input contains an integer N (5 < N < 2000).

Output
Print the square of each one of the even values from 1 to N, as the given example.

Be carefull! Some language automaticly print 1e+006 instead 1000000. Please configure your program to print the correct format setting the output precision.

Input Sample	
6
Output Sample
2^2 = 4
4^2 = 16
6^2 = 36
 
*/

lines = ["6"]

const N  = parseInt(lines[0])

for(let i = 1; i <= N; i++){
  //console.log(i)
  if(i % 2 === 0){
    console.log(`${i}^2 = ${i**2}`)
  }
}
