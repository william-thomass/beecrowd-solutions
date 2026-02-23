/*
Read 3 double numbers (A, B and C) representing the sides of a triangle and arrange them in decreasing order, so that the side A is the biggest of the three sides. Next, determine the type of triangle that they can make, based on the following cases always writing an appropriate message:

if A ≥ B + C, write the message: NAO FORMA TRIANGULO
if A2 = B2 + C2, write the message: TRIANGULO RETANGULO
if A2 > B2 + C2, write the message: TRIANGULO OBTUSANGULO
if A2 < B2 + C2, write the message: TRIANGULO ACUTANGULO
if the three sides are the same size, write the message: TRIANGULO EQUILATERO
if only two sides are the same and the third one is different, write the message: TRIANGULO ISOSCELES
Input
The input contains three double numbers, A (0 < A) , B (0 < B) and C (0 < C).

Output
Print all the classifications of the triangle presented in the input.

Input Samples	
7.0 5.0 7.0
Output Samples
TRIANGULO ACUTANGULO
TRIANGULO ISOSCELES
*/

lines = ["7.0 5.0 7.0"]

const numbers = lines[0].split(" ").map(item => parseFloat(item)).sort((a , b ) => b - a )
//console.log(numbers)
const [ A , B , C ] = numbers
//console.log(A , B , C)

if( A >= B + C){
  console.log("NAO FORMA TRIANGULO")
}else{

  if( A ** 2 === (B **2) + (C**2) ){
     console.log("TRIANGULO RETANGULO")
  }
  if( A ** 2 > (B **2) + (C**2) ){
     console.log("TRIANGULO OBTUSANGULO")
  }
  if( A ** 2 < (B **2) + (C**2) ){
     console.log("TRIANGULO ACUTANGULO")
  }
  if( A === B  &&  B === C){
    console.log("TRIANGULO EQUILATERO")
  }
  if( A === B && B !== C || A === C && B !== C || C === B && A !== B){
    console.log("TRIANGULO ISOSCELES")
  }
}
