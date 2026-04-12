// Assignment 1: 
// -------------
// Task Management System (ToDo App Modules):
//      Building a task manager like Todoist

// Requirements:
//      Create a modular todo app with 3 separate files:

       
          
//         i. validator.js - Input validation
//                       // TODO: Export these validation functions
                      
//                       // 1. Validate task title (not empty, min 3 chars)
//                       function validateTitle(title) {
//                         // Your code here
//                       }
                      
//                       // 2. Validate priority (must be: low, medium, high)
//                       function validatePriority(priority) {
//                         // Your code here
//                       }
                      
//                       // 3. Validate due date (must be future date)
//                       function validateDueDate(date) {
//                         // Your code here
//                       }



//        ii. task.js - Task operations
//                     // TODO: Import validator functions
//                     // import { ... } from './validator.js';
                    
//                     const tasks = [];
                    
//                     // 1. Add new task
//                     function addTask(title, priority, dueDate) {
//                       // Validate using imported functions
//                       // If valid, add to tasks array
//                       // Return success/error message
//                     }
                    
//                     // 2. Get all tasks
//                     function getAllTasks() {
//                       // Return all tasks
//                     }
                    
//                     // 3. Mark task as complete
//                     function completeTask(taskId) {
//                       // Find task and mark as complete
//                     }

//                   // Export functions


let title=  "anirudh"
function validateTaskTitle(title)
{
    if(!title|| title.length()<=3)
    
        {
            return "invalid title";
        }
}
let getPriority = "high";

function validatePriority(priority) {
    const priorities = ["high", "medium", "low"];
    let result= priorities.includes(priority);
    if(result===false)
    {
        return "invalid property";
    }
    return "true"
}


function dateValidate(date) {
  
  let dueDate=new Date('2024-10-20') 
  let today=new Date()
  if(dueDate>today){
    return "Invalid duedate"
  }
  return true;
}
export {dateValidate,validateTaskTitle,validatePriority}