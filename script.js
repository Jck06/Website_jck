// Array to store tasks
let tasks = [];

// Function to add a task
function addTask() {

    let task = document.getElementById("taskInput").value;

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    tasks.push(task);

    displayTasks();

    document.getElementById("taskInput").value = "";
}

// Function to display tasks
function displayTasks() {

    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        let li = document.createElement("li");

        li.innerHTML =
            tasks[i] +
            ` <button class="removeBtn" onclick="removeTask(${i})">Remove</button>`;

        taskList.appendChild(li);
    }
}

// Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// Event Listener
document.getElementById("addBtn").addEventListener("click", addTask);