/*
Read the four values corresponding to the x and y axes of two points in the plane, p1 (x1, y1) and p2 (x2, y2) and calculate the distance between them, showing four decimal places, according to the formula:

Distance = Raiz(x2-x1)**2 + (y2 - y1)**2

Input
The input file contains two lines of data. The first one contains two double values: x1 y1 and the second one also contains two double values with one digit after the decimal point: x2 y2.

Output
Calculate and print the distance value using the provided formula, with 4 decimal places.

Input Sample	
1.0 7.0
5.0 9.0
Output Sample
4.4721
*/

lines = ["1.0 7.0","5.0 9.0"]

const [x1, y1] = lines[0].split(" ").map(item=> parseFloat(item))
const [x2, y2] = lines[1].split(" ").map(item=> parseFloat(item))

const distance = Math.sqrt((x1 - x2)**2 + (y1 - y2)**2)

//console.log(x1,y1)
//console.log(x2,y2)
console.log(distance.toFixed(4))