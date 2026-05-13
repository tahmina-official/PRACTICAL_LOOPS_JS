//Part 1: Fizz Buzz
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

console.log("Part 1: Fizz Buzz");
console.log("=================================================================================================");
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
console.log("=================================================================================================");

// Part 2: Prime Time
// Start at n
//    ↓
// Check next number
//    ↓
// Is it divisible by anything?
//    ↓
// YES → skip it
// NO  → PRINT IT + STOP

console.log("Part 2: Prime Number (hardcoded value)");
let n = 4; // change this to test different values
let foundPrime = false; // control logic flow

while (!foundPrime) { //Use a while loop because we don’t know how many numbers we need to check.
  n++; // move to next number

  let isPrime = true; //We assume the number is prime until proven otherwise.

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {  // If divisible → not prime
      isPrime = false;
      break; // stops checking
    }
  }

  if (isPrime) {
    console.log(n);      // prints the prime number
    foundPrime = true;  // stops the while loop
  }
}

console.log("=================================================================================================");

// Part 3: Feeling Loopy
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.

console.log("Part 3: Feeling Loopy");
// Prints the section title

console.log("=================================================================================================");
// Prints a separator line for readability

const csv =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// const csv =
//   "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";  

// Variables for the 4 cells
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

let currentCell = 1;

// Loop through each character
for (let i = 0; i < csv.length; i++) {
  let char = csv[i];

  if (char === ",") {
    // Move to next cell
    currentCell++;
  } else if (char === "\n") {
    // End of row → log it
    console.log(cell1, cell2, cell3, cell4);

    // Reset for next row
    cell1 = "";
    cell2 = "";
    cell3 = "";
    cell4 = "";
    currentCell = 1;
  } else {
    // Add character to the correct cell
    if (currentCell === 1) {
      cell1 += char;
    } else if (currentCell === 2) {
      cell2 += char;
    } else if (currentCell === 3) {
      cell3 += char;
    } else if (currentCell === 4) {
      cell4 += char;
    }
  }
}

// Log final row (since it may not end with \n)
if (cell1 || cell2 || cell3 || cell4) {
  console.log(cell1, cell2, cell3, cell4);
}

console.log("=================================================================================================");
// Prints closing separator line


// This will work perfectly in the browser with prompt not Git bash terminal
// Let the user input a number and then print all prime numbers from 2 to that number
// console.log("Part 2: Let the user input a number and then print all prime numbers from 2 to that number");
// console.log("=================================================================================================");

// let m = parseInt(prompt("Enter a number"));

// console.log("Prime numbers from 2 to", m);

// for (let num = 2; num <= m; num++) {

//   let isPrime = true;

//   for (let i = 2; i <= Math.sqrt(num); i++) {

//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(num);
//   }
// }