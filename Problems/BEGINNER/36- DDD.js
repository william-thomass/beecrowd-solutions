/*
Read an integer number that is the code number for phone dialing. Then, print the destination according to the following table:




If the input number isn’t found in the above table, the output must be:
DDD nao cadastrado
That means “DDD not found” in Portuguese language.

Input
The input consists in a unique integer number.

Output
Print the city name corresponding to the input DDD. Print DDD nao cadastrado if doesn't exist corresponding DDD to the typed number.

Input Sample	
11
Output Sample
Sao Paulo

DDD	Destination
11	Sao Paulo
19	Campinas
21	Rio de Janeiro
27	Vitoria
31	Belo Horizonte
32	Juiz de Fora
61	Brasilia
71	Salvador
*/

lines = ["31"]

const ddd = parseInt(lines[0])

switch (ddd) {
  case 11:
    console.log("Sao Paulo")
    break;
  case 19:
    console.log("Campinas")
    break;
  case 21:
    console.log("Rio de Janeiro")
    break;
  case 27:
    console.log("Vitoria")
    break;  
  case 31:
    console.log("Belo Horizonte")
    break;
  case 32:
    console.log("Juiz de Fora")
    break;
  case 61:
    console.log("Brasilia")
    break;
  case 71:
    console.log("Salvador")
    break;
  default:
    console.log("DDD nao cadastrado")
    break;
}