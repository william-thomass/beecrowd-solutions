/*
Read an integer value, which is the duration in seconds of a certain event in a factory, and inform it expressed in hours:minutes:seconds.

Input
The input file contains an integer N.

Output
Print the read time in the input file (seconds) converted in hours:minutes:seconds like the following example.

Input Sample	
556
Output Sample
0:9:16
*/

lines = ["556"]

let N = parseInt(lines[0])

const times = [3600, 60, 1] // 60 * 60 = 3600s 1h/ 1min = 60s

const hours = Math.floor( N / 3600 )
N = N % times[0]
const minutes = Math.floor( N / 60 )
N = N % times[1]
const seconds = Math.floor( N / 1 )

console.log(`${hours}:${minutes}:${seconds}`)


//OUTRA OPÇÃO COM FOR
/*
const lines = ["556"];
let totalSeconds = parseInt(lines[0]);

const timeUnits = [3600, 60, 1];
const result = [];

for (let unit of timeUnits) {
    const value = Math.floor(totalSeconds / unit);
    result.push(value);
    totalSeconds %= unit;
}

// O .join(':') pega o array [0, 9, 16] e transforma em "0:9:16"
console.log(result.join(':'));
*/