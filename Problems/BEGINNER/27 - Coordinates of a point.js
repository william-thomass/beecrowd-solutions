/*
Write an algorithm that reads two floating values (x and y), which should represent the coordinates of a point in a plane. Next, determine which quadrant the point belongs, or if you are at one of the Cartesian axes or the origin (x = y = 0).



If the point is at the origin, write the message "Origem".

If the point is at X axis write "Eixo X", else if the point is at Y axis write "Eixo Y".

Input
The input contains the coordinates of a point.

Output
The output should display the quadrant in which the point is.

Input Sample	
4.5 -2.2
Output Sample
Q4
*/
lines = ["0.0 0.1"]
const [coordX, coordY] = lines[0].split(" ").map((item) => parseFloat(item))

//console.log(coordX, coordY)

if(coordX === 0 || coordY === 0){
  if(coordY !== 0){
    console.log("Eixo Y")
  }else if(coordX !== 0){
    console.log("Eixo X")
  }else{
    console.log("Origem")
  }
}else if( coordX > 0 && coordY > 0){
  console.log("Q1")
}else if(coordX < 0 && coordY > 0){
  console.log("Q2")
}else if(coordX < 0 && coordY < 0){
  console.log("Q3")
}else{
  console.log("Q4")
}
