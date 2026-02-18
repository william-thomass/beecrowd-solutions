/*
Read 4 integer values A, B, C and D. Then if B is greater than C and D is greater than A and if the sum of C and D is greater than the sum of A and B and if C and D were positives values and if A is even, write the message “Valores aceitos” (Accepted values). Otherwise, write the message “Valores nao aceitos” (Values not accepted).

Input
Four integer numbers A, B, C and D.

Output
Show the corresponding message after the validation of the values​​.

Input Sample	
5 6 7 8
Output Sample
Valores nao aceitos
Input Sample	
2 3 2 6
Output Sample
Valores aceitos
*/
lines = ["5 6 7 8"]
//lines = ["2 3 2 6"]
const [A, B, C, D] = lines[0].split(" ").map((item) => parseInt(item))
const sumCD = C + D
const sumAB = A + B
//console.log(A,B,C,D)
if(B > C && D > A && sumCD > sumAB && C > 0 && D > 0 && A % 2 === 0){
   console.log("Valores aceitos")
  
}else{
  console.log("Valores nao aceitos")
}