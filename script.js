// initialize an array to store tasks
let tasks = [];

// add an event listener to add tasks 
document.getElementById('addTaskbtn').addEventListener('click', addTask);

// function to add a task
function addTask() {
    // store the text value from input as a variable taskInput 
    let taskInput = document.getElementById('taskInput').value.trim();

    // check if anything is in the input box
    if (taskInput) {
        // add the new task to the array
        tasks.push(taskInput);

        // clear the input box after adding the task
        document.getElementById('taskInput').value = '';

        // call function to display the tasks
        displayTasks();
    }
}

// function to display the tasks from tasks[] in the ul 
function displayTasks() {
    // get the element from html 
    let taskList = document.getElementById('taskList');

    // clear the existing task list before updating it 
    taskList.innerHTML = '';

    // loop through each task in the array and create a list item
    tasks.forEach((task, index) => {
        // create a new <li> element for each task
        let li = document.createElement('li');

        // add bootstrap classes for styling
        li.classList.add(
            'list-group-item',
            'd-flex',
            'justify-content-between',
            'align-items-center'
        );

        // set the inner html of the <li> element with task text and a remove button
        li.innerHTML = `${task} <button class='btn btn-dark btn-small' onclick='removeTask(${index})'>√</button>`;

        // append the new task to the task list 
        taskList.appendChild(li);
    });

    // update the task counter
    updateCounter();
}

// function to remove a task from the list when the "√" button is clicked 
function removeTask(index) {
    // remove the task at a given index from the array 
    tasks.splice(index, 1);

    // call the function to update the task list display
    displayTasks();
}

// function to update the task counter
function updateCounter() {
    document.getElementById('taskCounter').innerText = `total tasks: ${tasks.length}`;
}

// event listener for the "clear all tasks" button
document.getElementById('clearTaskBtn').addEventListener('click', function() {
    // empty the tasks array 
    tasks = [];

    // call the function to clear tasks
    displayTasks();
});

// event listener for enter key on input box
document.getElementById('taskInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
