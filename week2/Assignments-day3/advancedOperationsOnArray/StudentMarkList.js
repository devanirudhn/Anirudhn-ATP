// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

// Test data:
 const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 92
// filtering the pass marks
let passMarks=marks.filter((element) => element>=40 )
console.log(passMarks);
// map to add grace marks
let graceMarks = marks.map((element)=> element+5);
console.log(graceMarks);
// reduce to find the least mark
let leastMark =marks.reduce((mark,nextM) =>
{
    if(mark<nextM)
    {
        return mark;
    }
    else{
        return nextM
    }
})
console.log(leastMark);
// finding the first mark below forty
let markBelowForty = marks.find((element)=> element<40)
console.log(markBelowForty);
// finding the index of mark 92

let indexOfMark =marks.findIndex((element)=> element==92);
console.log(indexOfMark);


