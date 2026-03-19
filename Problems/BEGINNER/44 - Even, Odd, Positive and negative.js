/*
Make a program that reads five integer values. Count how many   of these values are even, odd, positive and negative. Print these information like following example.

Input
The input will be 5 integer values.

Output
Print a message like the following example with all letters in lowercase, indicating how many of these values ​​are even, odd, positive and negative.

Input Sample
-5
0
-3
-4
12

Output Sample

3 valor(es) par(es)
2 valor(es) impar(es)
1 valor(es) positivo(s)
3 valor(es) negativo(s)
*/

lines = ["-5","0","-3","-4","12",""];

const numbers = lines.map(value => parseInt(value));

let even = 0;
let odd = 0;
let positive = 0;
let negative = 0;

//console.log(numbers)
for(number of numbers){
  //Se o número não for um número ir para o próximo usado quando quando usamos parseInt e ele falhar
  if(isNaN(number)) continue;
  //par ou impar // even or odd
  if(number % 2 === 0) even++ ;else odd++ ;
  //posivo ou negativo // positive or negative
  if(number > 0) positive++ ;else if(number < 0)negative++ ;
}

console.log(`${even} valor(es) par(es)`);
console.log(`${odd} valor(es) impar(es)`);
console.log(`${positive} valor(es) positivo(s)`);
console.log(`${negative} valor(es) negativo(s)`);
//console.log(`${("QWEQWEQEWasdasd").toLowerCase()}`)