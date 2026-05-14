// Challenge 4
//  Find the smallest element in a given array
// Declaring array
let marks = [1, 20, 30, 40, 2];

// Assuming first element as smallest
let smallest = marks[0];

// Looping through remaining elements
for (let i = 1; i < marks.length; i++) {
  // Checking for smaller element
  if (marks[i] < smallest) {
    smallest = marks[i];
  }
}

// Printing smallest element
console.log(smallest);
