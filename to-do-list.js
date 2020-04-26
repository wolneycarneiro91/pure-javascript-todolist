/**
 * This to list example was been created for help a friend with javascript knowedge.
 */

var inputTaskText           = document.querySelector('input[name="inputTask"');
var tasksForm               = document.querySelector('form[name="todoListForm"]');
var removeAllTasksButton    = document.querySelector('button[name="removeAllTasks"]');
var addTaskButton           = document.querySelector('button[name="addTask"]');
var domTask                 = new DOMTask();

inputTaskText.addEventListener('input', function(event){
    event.target.value.trim() != '' ? StateDOMTaskHandler.enableAddTaskButton() : StateDOMTaskHandler.disableAddTaskButton();
});

tasksForm.addEventListener('submit', function(event){
    event.preventDefault();
    var taskValue = inputTaskText.value.trim();
    
    if (taskValue != '') {
        if ( !domTask.exists( TaskHelper.generateId(taskValue) ) ) {

            domTask.add( new Task(taskValue, TaskHelper.generateId(taskValue) ) )
            domTask.clear();
            domTask.showCount();
            StateDOMTaskHandler.disableAddTaskButton();
            
            domTask.count() > 1 ? StateDOMTaskHandler.enableRemoveAllTasksButton() : StateDOMTaskHandler.disableRemoveAllTasksButton();
            
            if ( domTask.count() >= 10 ) {
                StateDOMTaskHandler.enableVerticalScroll();
            }
        }
    }
});

document.addEventListener('click', function(event){
    if (event.target.type == 'button' && event.target.name == 'removeTask') {
        event.preventDefault();

        domTask.remove(event.target);

        if ( domTask.count() <= 1) {            
            inputTaskText.value.trim() == '' ? StateDOMTaskHandler.disableAddTaskButton() : '';
            StateDOMTaskHandler.disableRemoveAllTasksButton();
        } 
        
        domTask.showCount();
    } 
});

removeAllTasksButton.addEventListener('click', function(event){
    event.preventDefault();

    if ( domTask.count() > 1 ) {
        domTask.removeAll();
        domTask.showCount();
   
        StateDOMTaskHandler.disableRemoveAllTasksButton();
        StateDOMTaskHandler.disableAddTaskButton();
    }
});