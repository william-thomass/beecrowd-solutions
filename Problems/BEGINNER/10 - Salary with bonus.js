/*
Make a program that reads a seller's name, his/her fixed salary and the sale's total made by himself/herself in the month (in money). Considering that this seller receives 15% over all products sold, write the final salary (total) of this seller at the end of the month , with two decimal places.

- Don’t forget to print the line's end after the result, otherwise you will receive “Presentation Error”.

- Don’t forget the blank spaces.

Input
The input file contains a text (employee's first name), and two double precision values, that are the seller's salary and the total value sold by him/her.

Output
Print the seller's total salary, according to the given example.

Input Samples	
JOAO
500.00
1230.30

Output Samples
TOTAL = R$ 684.54
*/

lines = ["JOAO","500.00","1230.30"]

const salaryFixed = parseFloat(lines[1])
const sales = parseFloat(lines[2])
const bonus = sales * 0.15

const salaryWithBonus = salaryFixed + bonus

console.log(`TOTAL = R$ ${salaryWithBonus.toFixed(2)}`)

