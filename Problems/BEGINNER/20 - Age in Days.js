/*
Read an integer value corresponding to a person's age (in days) and print it in years, months and days, followed by its respective message “ano(s)”, “mes(es)”, “dia(s)”.

Note: only to facilitate the calculation, consider the whole year with 365 days and 30 days every month. In the cases of test there will never be a situation that allows 12 months and some days, like 360, 363 or 364. This is just an exercise for the purpose of testing simple mathematical reasoning.

Input
The input file contains 1 integer value.

Output
Print the output, like the following example.

Input Sample	
400
Output Sample
1 ano(s)
1 mes(es)
5 dia(s)
*/

lines = ["400"]

let ageDays = parseInt(lines[0])

const dates = [365, 30, 1]

const result = []

for(let date of dates ){
  let conversionDate = Math.floor( ageDays / date)
  
  result.push(conversionDate)

  ageDays = ageDays % date

}

console.log(`${result[0]} ano(s)`)
console.log(`${result[1]} mes(es)`)
console.log(`${result[2]} dia(s)`)

