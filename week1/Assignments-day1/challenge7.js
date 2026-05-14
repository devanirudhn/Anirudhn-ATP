// Challenge 7
//  Write a function that searches an element in an array and returns its index
// Function to search element in array
function search(marks, searchElement) {
  // Looping through array
  for (let i = 0; i < marks.length; i++) {
    // Checking whether element matches
    if (marks[i] === searchElement) {
      // Returning index if found
      return i;
    }
  }

  // Returning message if element not found
  return "not found";
}

// Declaring array
let marks = [2, 4, 5, 6, 7, 8, 9];

// Function call
let result = search(marks, 21);

// Printing result
console.log(result);
