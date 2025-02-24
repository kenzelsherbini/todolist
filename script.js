//innit an array to store tasks 
let tasks = [""]
//add an event listener to add tasks 
document.getElementById("addTaskBtn").addEventListener('click', function() {
//storing text value from input as a variable task input 
    let taskInput = document.getElementById('taskInput').value
//checks if anything is in the input box
    if (taskInput){
//adds the new task
    tasks.push(taskInput)
//clears what is in the input box and sets value to nothing 
    document.getElementById('taskInput').value = ''

    displayTasks()
    }
})