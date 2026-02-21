/*
Read three point floating values (A, B and C) and verify if is possible to make a triangle with them. If it is possible, calculate the perimeter of the triangle and print the message:


Perimetro = XX.X


If it is not possible, calculate the area of the trapezium which basis A and B and C as height, and print the message:


Area = XX.X

Input
The input file has tree floating point numbers.

Output
Print the result with one digit after the decimal point.

Input Sample	
6.0 4.0 2.0
Output Sample
Area = 10.0
*/

lines = ["6.0 4.0 2.1"]

const [A, B, C] = lines[0].split(" ").map(item => parseFloat(item))

//console.log( A, B, C)

const perimeter = A + B + C

const area = ((A + B ) * C) / 2

if(A + B > C && B + C > A && A + C > B ){
  console.log(`Perimetro = ${perimeter.toFixed(1)}`)
}else{
  console.log(`Area = ${area.toFixed(1)}`)
}

