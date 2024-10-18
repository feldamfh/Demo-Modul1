// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("new-task");
    var taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create new task element
    var li = document.createElement("li");
    var span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span);

    // Create edit button
    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.className = "edit-btn";
    editBtn.onclick = function() {
        editTask(this);
    };
    li.appendChild(editBtn);

    // Create delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.onclick = function() {
        this.parentElement.remove();
    };
    li.appendChild(deleteBtn);

    // Add the new task to the list
    document.getElementById("task-list").appendChild(li);

    // Clear the input field
    taskInput.value = "";
}

// Function to edit an existing task
function editTask(editButton) {
    var listItem = editButton.parentElement;
    var span = listItem.getElementsByTagName("span")[0];
    var currentText = span.textContent;

    // Create an input element to edit the task
    var input = document.createElement("input");
    input.type = "text";
    input.value = currentText;

    // Replace the span with the input field
    listItem.replaceChild(input, span);

    // Change the edit button to a save button
    editButton.innerHTML = "Save";
    editButton.onclick = function() {
        saveTask(this);
    };
}

// Function to save the edited task
function saveTask(saveButton) {
    var listItem = saveButton.parentElement;
    var input = listItem.getElementsByTagName("input")[0];
    var newText = input.value;

    if (newText === "") {
        alert("Task cannot be empty!");
        return;
    }

    // Create a span element with the new text
    var span = document.createElement("span");
    span.textContent = newText;

    // Replace the input with the span
    listItem.replaceChild(span, input);

    // Change the save button back to the edit button
    saveButton.innerHTML = "Edit";
    saveButton.onclick = function() {
        editTask(this);
    };
}
