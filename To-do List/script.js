document.addEventListener('DOMContentLoaded', () => {
    // Load tasks from local storage when the page loads
    loadTasksFromLocalStorage();
});

document.querySelector('#addtask').addEventListener('click', () => {
    let task = document.querySelector('#task').value;
    
    if (task.trim() !== '') {
        addTaskToDOM(task);
        saveTaskToLocalStorage(task);
        document.querySelector('#task').value = '';
    } else {
        alert('Please enter a task.');
    }
});

// Function to add task to DOM
function addTaskToDOM(task) {
    var cardBody = document.querySelector('.card-body');
    var html = `
        <div class="row mb-3 taskrow">
            <div class="col-1">
                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
            </div>
            <div class="col-9  col-md-10">
                <span class="todo-text">${task}</span>
            </div>
            <div class="col-1">
                <button type="button" class="btn-close cursor-pointer"></button>
            </div>
        </div>
    `;
    cardBody.insertAdjacentHTML('beforeend', html);
}

// Function to save task to local storage
function saveTaskToLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from local storage and display them
function loadTasksFromLocalStorage() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        addTaskToDOM(task);
    });
}

// Event delegation for the checkbox change event
document.querySelector('.card-body').addEventListener('change', (event) => {
    if (event.target.classList.contains('form-check-input')) {
        let taskRow = event.target.closest('.taskrow');
        let todoText = taskRow.querySelector('.todo-text');
        if (event.target.checked) {
            todoText.classList.add('ticked');
        } else {
            todoText.classList.remove('ticked');
        }
    }
});

// Event delegation for the close button
document.querySelector('.card-body').addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-close')) {
        let taskRow = event.target.closest('.taskrow');
        let taskText = taskRow.querySelector('.todo-text').textContent;
        removeTaskFromLocalStorage(taskText);
        taskRow.remove();
    }
});

// Function to remove a task from local storage
function removeTaskFromLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
