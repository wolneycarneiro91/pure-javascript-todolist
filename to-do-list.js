/**
 * This to list example was been created for help a friend with javascript knowedge.
 */

var inputTaskText           = document.querySelector('input[name="inputTask"');
var ulList                  = document.querySelector('ul');
var tasksForm               = document.querySelector('form[name="todoListForm"]');
var removeAllTasksButton    = document.querySelector('button[name="removeAllTasks"]');
var taskCountContent        = document.querySelector('b');
var addTaskButton           = document.querySelector('button[name="addTask"]');

inputTaskText.addEventListener('input', function(event){
    event.target.value.trim() != '' ? enableAddTaskButton() : disableAddTaskButton();
});

tasksForm.addEventListener('submit', function(event){
    event.preventDefault();
    var task = inputTaskText.value.trim();

    if (task != '') {
        if ( !exists(task) ) {

            addNewTask(task);
            clearInputTask();
            showTasksCount();

            tasksCount() > 1 ? enableRemoveAllTasksButton() : disableRemoveAllTasksButton();
        }
    }
});

document.addEventListener('click', function(event){
    if (event.target.type == 'button' && event.target.name == 'removeTask') {
        event.preventDefault();

        removeTask(event.target);
    } 
});

removeAllTasksButton.addEventListener('click', function(event){
    event.preventDefault();

    if ( tasksCount() > 1 ) {
        removeAllTasks();
        showTasksCount();
        disableRemoveAllTasksButton();
        disableAddTaskButton();
    }
});

function addNewTask(task) {
    var liElement = document.createElement('li');
    liElement.appendChild( document.createTextNode(task) );

    var removeButtonElement = document.createElement('button');
    removeButtonElement.setAttribute('type', 'button');
    removeButtonElement.setAttribute('name', 'removeTask');
    removeButtonElement.setAttribute('value', generateTaskId(task) );
    removeButtonElement.setAttribute('class', 'removeTask');
    removeButtonElement.appendChild( document.createTextNode('[Remove Task]') );

    liElement.setAttribute('id', generateTaskId(task) );
    liElement.appendChild(removeButtonElement);

    ulList.appendChild(liElement);
}

function clearInputTask() {
    inputTaskText.value = '';
}

function removeAllTasks() {
    ulList.innerHTML = '';
}

function allTasks() {
    return document.querySelectorAll('li');
}

function removeTask(taskElement) {

    if (taskElement.value == taskElement.parentElement.id) {
        taskElement.parentElement.remove();

        if ( tasksCount() <= 0) {
            disableRemoveAllTasksButton();

            inputTaskText.value.trim() == '' ? disableAddTaskButton() : '';
        }

        showTasksCount();
    }
}

function tasksCount() {
    return document.querySelectorAll('li').length;    
}

function showTasksCount() {
    taskCountContent.textContent =  tasksCount();
}

function generateTaskId(taskName, separator = '-') {
    return taskName.split(' ').join(separator).toLowerCase();
}

function exists(taskName) {
    return Array.prototype.some.call(document.querySelectorAll('li'), function(task) {
        return task.id === generateTaskId(taskName);
    });
}

function enableAddTaskButton() {
    addTaskButton.removeAttribute('disabled');
}

function disableAddTaskButton() {
    addTaskButton.setAttribute('disabled', 'true');
}

function enableRemoveAllTasksButton() {
    removeAllTasksButton.removeAttribute('disabled');
}

function disableRemoveAllTasksButton() {
    removeAllTasksButton.setAttribute('disabled', 'true');
}