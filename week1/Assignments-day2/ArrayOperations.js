const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];

console.log(employees);

employees.splice(1,0,{eno:107,name:"umakar",marks:[20,20,20]})
console.log(employees);



console.log(employees);
for (let i = 0; i < employees.length; i++) {
  if (employees[i].name === "Kiran") {
    employees.splice(i, 1); 
    break; 

  }
}


for (let emp of employees) {
  if (emp.name === "Sneha") {
    
    emp.marks[2] = 25;
  }
}

console.log(employees);



// Insert new Emp at 2nd position
// Remove an emp with name "Kiran"
// 3.Change the last mark 95 to 75 of emp  "Sneha"
