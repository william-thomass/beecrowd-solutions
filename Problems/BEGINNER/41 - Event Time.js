/*
Peter is organizing an event in his University. The event will be in April month, beginning and finishing within April month. The problem is: Peter wants to calculate the event duration in seconds, knowing obviously the begin and the end time of the event.

You know that the event can take from few seconds to some days, so, you must help Peter to compute the total time corresponding to duration of the event.

Input
The first line of the input contains information about the beginning day of the event in the format: “Dia xx”. The next line contains the start time of the event in the format presented in the sample input. Follow 2 input lines with same format, corresponding to the end of the event.

Output
Your program must print the following output, one information by line, considering that if any information is null for example, the number 0 must be printed in place of W, X, Y or Z:

W dia(s)
X hora(s)
Y minuto(s)
Z segundo(s)

Obs: Consider that the event of the test case have the minimum duration of one minute. “dia” means day, “hora” means hour, “minuto” means minute and “Segundo” means second in Portuguese.

Input Sample	
Dia 5
08 : 12 : 23
Dia 9
06 : 13 : 23

Output Sample
3 dia(s)
22 hora(s)
1 minuto(s)
0 segundo(s)
*/

lines = ["Dia 5", "08:12:23", "Dia 9", "06:13:23"]

const startDay = lines[0].split(" ")
const endDay = lines[2].split(" ")
const numberStartDay = parseInt(startDay[1])
const numberEndDay = parseInt(endDay[1])
const startTime = lines[1].split(":")
const endTime = lines[3].split(":")
const [startHour, startMinute, startSecunds] = startTime.map(item => parseInt(item))
const [endHour, endMinute, endSecunds] = endTime.map(item => parseInt(item))
//console.log(numberStartDay)
//console.log(startTime)
//console.log(startHour,startMinute, startSecunds)
// 1min = 60s 1h = 3600s(60 x 60) 1 dia = 86400(60s x 60m x 24h)
const  startToSecunds = (numberStartDay * 86400) + ( startHour * 3600) + (startMinute * 60) + startSecunds  
const  endToSecunds = (numberEndDay * 86400) + ( endHour * 3600) + (endMinute * 60) + endSecunds

let result = endToSecunds - startToSecunds

const day = Math.floor( result / 86400)
result %= 86400
const hours = Math.floor(result / 3600)
result %= 3600
const minute = Math.floor(result / 60)
result %= 60
const seconds = result 

console.log(`${day} dia(s)`)
console.log(`${hours} hora(s)`)
console.log(`${minute} minuto(s)`)
console.log(`${seconds} segundo(s)`)
