// Initialize an array to store tasks
let tasks = [];

// Add an event listener to add tasks 
document.getElementById('addTaskbtn').addEventListener('click', function() {
    // Store the text value from input as a variable taskInput 
    let taskInput = document.getElementById('taskInput').value;

    // Check if anything is in the input box
    if (taskInput) {
        // Add the new task to the array
        tasks.push(taskInput);

        // Clear the input box after adding the task
        document.getElementById('taskInput').value = '';

        // Call function to display the tasks
        displayTasks();
    }
});

// Function to display the tasks from tasks[] in the UL 
function displayTasks() {
    // Get the element from HTML 
    let taskList = document.getElementById('taskList');

    // Clear the existing task list before updating it 
    taskList.innerHTML = '';

    // Loop through each task in the array and create a list item
    tasks.forEach((task, index) => {
        // Create a new <li> element for each task
        let li = document.createElement('li');

        // Add bootstrap classes for styling
        li.classList.add(
            'list-group-item',
            'd-flex',
            'justify-content-between',
            'align-items-center'
        );

        // Set the inner HTML of the <li> element with task text and a remove button
        li.innerHTML = `${task} <button class='btn btn-dark btn-small' onclick='removeTask(${index})'>√</button>`;

        // Append the new task to the task list 
        taskList.appendChild(li);
    });
}

// Function to remove a task from the list when the "√" button is clicked 
function removeTask(index) {
    // Remove the task at a given index from the array 
    tasks.splice(index, 1);

    // Call the function to update the task list display
    displayTasks();
}

// Event listener for the "Clear All Tasks" button
document.getElementById('clearTaskBtn').addEventListener('click', function() {
    // Empty the tasks array 
    tasks = [];

    // Call the function to clear tasks
    displayTasks();
});
