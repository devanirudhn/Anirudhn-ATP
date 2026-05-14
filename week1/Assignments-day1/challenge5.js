// Challenge 5
//  Write a function that receives three number arguments and returns the biggest number
// Function to find biggest number
function bigNumber(a, b, c) {
  // Checking whether a is biggest
  if (a > b && a > c) {
    return a;
  }

  // Checking whether b is biggest
  else if (b > c) {
    return b;
  }

  // Otherwise c is biggest
  else {
    return c;
  }
}

// Function call
let result = bigNumber(10, 20, 30);

// Printing result
console.log(result);
