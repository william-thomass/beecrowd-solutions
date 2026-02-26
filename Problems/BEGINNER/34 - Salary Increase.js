/*
The company ABC decided to give a salary increase to its employees, according to the following table:


Salary	Readjustment Rate
0 - 400.00
400.01 - 800.00
800.01 - 1200.00
1200.01 - 2000.00
Above 2000.00

15%
12%
10%
7%
4%


Read the employee's salary, calculate and print the new employee's salary, as well the money earned and the increase percentual obtained by the employee, with corresponding messages in Portuguese, as the below example.
Input
The input contains only a floating-point number, with 2 digits after the decimal point.

Output
Print 3 messages followed by the corresponding numbers (see example) informing the new salary, the among of money earned (both must be shown with 2 decimal places) and the percentual obtained by the employee. Note:
Novo salario:  means "New Salary"
Reajuste ganho: means "Money earned"
Em percentual: means "In percentage"

Input Sample	
400.00

Output Sample
Novo salario: 460.00
Reajuste ganho: 60.00
Em percentual: 15 %
*/
lines = ["2000.00"]

let salary = parseFloat(lines[0])

if( salary <= 400.00) percentageIncrease = 15
else if(salary <= 800.00) percentageIncrease = 12
else if(salary <=1200.00) percentageIncrease = 10
else if(salary <= 2000.00) percentageIncrease = 7
else percentageIncrease = 4

let salaryIncrease = salary * (percentageIncrease / 100)
salary = salaryIncrease + salary 

console.log(`Novo salario: ${salary.toFixed(2)}`)
console.log(`Reajuste ganho: ${salaryIncrease.toFixed(2)}`)
console.log(`Em percentual: ${percentageIncrease} %`)