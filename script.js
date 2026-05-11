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
`ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
// Stores CSV data as a single string with \n representing new rows

let cell = "";
// Temporary storage for the current cell value being built

let row = [];
// Temporary storage for the current row (1D array)

let column = [];   
// Final 2D array that will store all rows

for (let i = 0; i < csv.length; i++) {
  // Loop through every character in the CSV string

  const char = csv[i];
  // Get the current character

  // If we reach a new line, the row is finished
  if (char === "\n") {
    row.push(cell);        
    // Add the last cell of the row

    column.push(row);      
    // Add completed row into the 2D array

    row = [];              
    // Reset row for next line

    cell = "";             
    // Reset cell for next value
  }

  // If we hit a comma, we finished a cell
  else if (char === ",") {
    row.push(cell);
    // Store completed cell into row

    cell = "";
    // Reset cell for next value
  }

  // Ignore Windows-style carriage return characters
  else if (char !== "\r") {
    cell += char;
    // Build the current cell character by character
  }
}

// After loop ends, handle the last remaining cell
if (cell.length > 0) {
  row.push(cell);
  // Push final cell into row
}

// After loop ends, handle the last row
if (row.length > 0) {
  column.push(row);
  // Push final row into 2D array
}

// Output the final 2D array
console.log(column);

console.log("=================================================================================================");
// Prints closing separator line


// This will work perfectly in the browser with prompt not Git bash terminal
// Let the user input a number and then print all prime numbers from 2 to that number
console.log("Part 2: Let the user input a number and then print all prime numbers from 2 to that number");
console.log("=================================================================================================");

let m = parseInt(prompt("Enter a number"));

console.log("Prime numbers from 2 to", m);

for (let num = 2; num <= m; num++) {

  let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {

          if (num % i === 0) {
              isPrime = false;
              break;
          }
    }

          if (isPrime) {
              console.log(num);
          }
}