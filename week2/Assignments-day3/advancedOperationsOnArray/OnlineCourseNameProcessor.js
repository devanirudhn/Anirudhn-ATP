// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:




//     5. findIndex() of "node"

//     1. filter() courses with name length > 5
let lengthBov5=courses.filter((element)=> element.length>5)
console.log(lengthBov5);
//     2. map() to convert course names to uppercase
let upperCase=courses.map((element)=> element.toUpperCase())
console.log(upperCase);

//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

let singleString=courses.reduce((prev,next) => (prev+ "|"+next).toUpperCase())
console.log(singleString);
//     4. find() the course "react"
let search= courses.find((element)=> element=="react")
console.log(search);
//     5. findIndex() of "node"
let fNode = courses.findIndex((element)=> element=="node")
console.log(fNode);



