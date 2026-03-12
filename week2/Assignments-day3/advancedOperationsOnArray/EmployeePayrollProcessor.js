
// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

// Test data:
//

// Tasks:


//     3. reduce() to calculate total salary payout
//     4. find() employee with salary 30000
//     5. findIndex() of employee "Neha"

 const employees = [
 { id: 201, name: "Amit", salary: 45000, department: "IT" },
 { id: 202, name: "Neha", salary: 60000, department: "HR" },
 { id: 203, name: "Rahul", salary: 75000, department: "IT" },
 { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
//     1. filter() employees from IT department
let fromItDep = employees.filter((element)=>element.department=="IT")
console.log(fromItDep);
//     2. map() to add:
//             netSalary = salary + 10% bonus
let bonus = employees.map((element)=> element.salary= element.salary+element.salary*0.10)
console.log(bonus);
//     3. reduce() to calculate total salary payout
let totalSal = employees.reduce((prev,next) => prev+next.salary,0)
console.log(totalSal);
//     4. find() employee with salary 30000
    let highPay = employees.find((element)=> element.salary == 33000)
        console.log(highPay);
        

//     5. findIndex() of employee "Neha"
let indexOfName = employees.findIndex((element)=> element.name=="Neha")
    console.log(indexOfName);
    