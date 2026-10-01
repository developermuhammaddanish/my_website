const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");


addBtn.addEventListener("click", function() {

    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }


    // Create list item
    const li = document.createElement("li");

    li.classList.add("task");


    // Create task text
    const span = document.createElement("span");

    span.textContent = taskText;


    // Create delete button
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.classList.add("deleteBtn");


    // Complete / Uncomplete task
    span.addEventListener("click", function() {

        span.classList.toggle("completed");

    });


    // Delete task
    deleteBtn.addEventListener("click", function() {

        li.remove();

    });


    // Add elements to list item
    li.append(span);
    li.append(deleteBtn);


    // Add list item to task list
    taskList.appendChild(li);


    // Clear input
    taskInput.value = "";

});