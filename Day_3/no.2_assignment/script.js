// Add click event to the Add Task button to create new task
document.getElementById("addTaskBtn").addEventListener("click", () => {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  // Show alert if task input is empty
  if (task === "") {
    alert("Please enter a task");
    return;
  }

  // Create a new list item for the task
  const li = document.createElement("li");
  li.textContent = task;

  // Add delete button to each task item when it's created
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  li.appendChild(deleteBtn);

  // Append the task to the task list
  document.getElementById("taskList").appendChild(li);
  input.value = "";
});

// Add task when user presses Enter key inside the input field
document.getElementById("taskInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.getElementById("addTaskBtn").click();
  }
});

// Toggle completed class when a task item is clicked
document.getElementById("taskList").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("completed");
  }

  // Remove task item when delete button is clicked
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});
