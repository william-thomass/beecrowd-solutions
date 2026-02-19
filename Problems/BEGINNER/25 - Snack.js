/*
Using the following table, write a program that reads a code and the amount of an item. After, print the value to pay. This is a very simple program with the only intention of practice of selection commands.

CODE	SPECIFICATION	PRICE
1	Cachorro Quente	R$ 4.00
2	X-Salada	R$ 4.50
3	X-Bacon	R$ 5.00
4	Torrada simples	R$ 2.00
5	Refrigerante	R$ 1.50

Input
The input file contains two integer numbers X and Y. X is the product code and Y is the quantity of this item according to the above table.

Output
The output must be a message "Total: R$ " followed by the total value to be paid, with 2 digits after the decimal point.

Input Sample	
3 2
Output Sample
Total: R$ 10.00
*/

lines = ["3 2"]
const [code, amount] = lines[0].split(" ").map((item) => parseInt(item))
//console.log(code, amount)

const menu = {
  1:{
    SPECIFICATION:"Cachorro Quente",
    PRICE:4.00,
  },
  2:{
    SPECIFICATION:"X-Salada",
    PRICE:4.50,
  },
  3:{
    SPECIFICATION:"X-Bacon",
    PRICE:5.00,
  },
  4:{
    SPECIFICATION:"Torrada Simples",
    PRICE:2.00,
  },
  5:{
    SPECIFICATION:"Refrigerante",
    PRICE:1.50,
  },
}

console.log(`Total: R$ ${(menu[code].PRICE * amount).toFixed(2)}`)