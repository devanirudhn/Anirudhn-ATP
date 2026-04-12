
// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:

// ];

// Tasks:
//     1. filter() students who passed (marks ≥ 40)
//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D

//    3. reduce() to calculate average marks
//    4. find() the student who scored 92
//    5. findIndex() of student "Kiran"

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
 ];
//  filtering passed students
 let passed = students.filter((element) => element.marks >= 40)
 console.log(passed);
 //     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D
let grading = students.map((element) =>
{
    if(element.marks>=90)
    {
        return 'A'
    }
    else if(element.marks>=75)
    {
        return 'B'
    }
    else if(element.marks>=60)
    {
        return 'C'
    }
    else{
         return 'D'
    }
})
console.log(grading);
//    3. reduce() to calculate average marks
 let avgMarks = students.reduce((sum, student)=> sum +student.marks,0)/students.length ;
 console.log(avgMarks);
 
    
 


//    4. find() the student who scored 92

    let searchMark = students.find((element) => element.marks==92)
    console.log(searchMark);
    
//    5. findIndex() of student "Kiran"
let indOfKiran = students.findIndex((element)=> element.name=="Kiran")
console.log(indOfKiran);
