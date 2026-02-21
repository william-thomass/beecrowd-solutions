/*
Read two integer values (A and B). After, the program should print the message "Sao Multiplos" (are multiples) or "Nao sao Multiplos" (aren’t multiples), corresponding to the read values.

Input
The input has two integer numbers.

Output
Print the relative message to the input as stated above.

Input Sample	
6 24
Output Sample
Sao Multiplos
*/

lines = ["6 24"]

const [numberOne, numberTwo] = lines[0].split(" ").map(item => parseInt(item))

console.log(numberOne % numberTwo === 0 || numberTwo % numberOne === 0 ? "Sao Multiplos":"Nao sao Multiplos")