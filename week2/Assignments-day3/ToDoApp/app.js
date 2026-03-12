
//       iii. app.js - Main application
//                   // TODO: Import task functions
//                   // import { ... } from './task.js';
//                   // Test your module system
//                   // 1. Add some tasks
//                   // 2. Display all tasks
//                   // 3. Complete a task
//                   // 4. Display all tasks again



import { addTask, getAllTasks } from "../../task.js";   
console.log(addTask("eating","high","2024-12-28"));
console.log(addTask("sleeping","high","2024-12-28"));
let result=getAllTasks()
console.log(result);

