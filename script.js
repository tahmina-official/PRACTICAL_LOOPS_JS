//Part 1: Fizz Buzz
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.
console.log("Part 1: Fizz Buzz");
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

// Part 2: Prime Time
// Start at n
//    ↓
// Check next number
//    ↓
// Is it divisible by anything?
//    ↓
// YES → skip it
// NO  → PRINT IT + STOP

console.log("Part 2: Prime Number");
let n = 9; // change this to test different values
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

const csv = 
`ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

let cell = "";
let row = [];

for (let i = 0; i < csv.length; i++) {     // Loop through every character in the CSV string
  const char = csv[i];                    // Get the current character

  /*
    STEP 1:
    If the character is a newline (\n),
    it means the current row is finished.
  */
  
    if (char === "\n") {
    row.push(cell);                // Add the last cell to the row
    console.log(row.join(" "));   // Print the completed row
 
    // Reset row and cell for the next row
    row = [];
    cell = "";
  }

  /*
    STEP 2:
    If the character is a comma,
    it means the current cell is finished.
  */
  
    else if (char === ",") {
    row.push(cell);    // Save the completed cell into the row array
    cell = "";        // Reset cell to start collecting the next value
  }

  /*
    STEP 3:
    Ignore carriage returns (\r)
    used in Windows line endings.
  */

  else if (char !== "\r") {    
    cell += char;  // Add the character to the current cell
  }
}

/*
  STEP 4:
  After the loop ends,
  there is still one last row remaining.
*/

if (cell.length > 0) {
  row.push(cell);                 // Add final cell to the row
  console.log(row.join(" "));    // Print the last row
}