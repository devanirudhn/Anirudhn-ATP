//  Challenge 6
// Write a function that receives an array as argument and returns the sum
// Function to calculate array sum
function arraySum(marks) {
  // Variable to store sum
  let sum = 0;

  // Looping through array
  for (let i = 0; i < marks.length; i++) {
    // Adding array elements
    sum = sum + marks[i];
  }

  // Returning final sum
  return sum;
}

// Declaring array
let marks = [1, 2, 3, 4, 5, 6];

// Function call
let result = arraySum(marks);

// Printing result
console.log(result);
