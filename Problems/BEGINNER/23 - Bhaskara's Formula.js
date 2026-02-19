/*
Read 3 floating-point numbers. After, print the roots of bhaskara’s formula. If it's impossible to calculate the roots because a division by zero or a square root of a negative number, presents the message “Impossivel calcular”.

Input
Read 3 floating-point numbers (double) A, B and C.

Output
Print the result with 5 digits after the decimal point or the message if it is impossible to calculate.

Input Samples	
10.0 20.1 5.1
Output Samples
R1 = -0.29788
R2 = -1.71212
*/

//lines = ["10.0 20.1 5.1"]
//lines = ["0.0 20.0 5.0"]
lines = ["10.0 3.0 5.0"]

const [A, B, C] = lines[0].split(" ").map((item) => parseFloat(item))

//console.log(A, B, C)
const delta = ( B**2 ) -4*( A * C )
console.log(delta) //Se delta maior que zero, são duas raizes
const ROne = (-(B)+Math.sqrt(delta)) / (2*A)
const RTwo = (-(B)-Math.sqrt(delta)) / (2*A)
if(A === 0 || delta <= 0){
  console.log("Impossivel calcular")
}else{
console.log(`R1 = ${ROne.toFixed(5)}`)
console.log(`R2 = ${RTwo.toFixed(5)}`)
}



