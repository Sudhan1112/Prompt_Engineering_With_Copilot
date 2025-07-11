// Build a basic to-do list app in JavaScript with functions to add, delete, and update tasks.

// Define an array to store the tasks   
let tasks = []; 

// Function to add a task
function addTask(task) {
  tasks.push(task);
}

// Function to delete a task    
function deleteTask(task) {
  let index = tasks.indexOf(task);
  if (index > -1) {
    tasks.splice(index, 1);
  }
}

// Function to update a task
function updateTask(oldTask, newTask) {
  let index = tasks.indexOf(oldTask);
  if (index > -1) {
    tasks[index] = newTask;
  }
}

// Test the functions
addTask("Buy groceries");
addTask("Pay bills");
addTask("Walk the dog");

console.log(tasks); // ["Buy groceries", "Pay bills", "Walk the dog"]

deleteTask("Pay bills");

console.log(tasks); // ["Buy groceries", "Walk the dog"]

updateTask("Buy groceries", "Buy milk");

console.log(tasks); // ["Buy milk", "Walk the dog"] 

