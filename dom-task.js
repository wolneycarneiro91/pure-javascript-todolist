class DOMTask {

    inputElement;
    ulElement;
    liElement;
    removeButtonElement;
    taskCountElement;

    constructor() {
        this.queryExistingElements();
    }

    add(task) {
        this.createElements(task);
    }

    remove(taskElement) {
        if (taskElement.value == taskElement.parentElement.id) {
            taskElement.parentElement.remove();
        }
    }
    
    removeAll() {
        this.ulElement.innerHTML = '';
    }

    all() {
        return document.querySelectorAll('li');
    }

    count() {
        return document.querySelectorAll('li').length;    
    }
    
    exists(taskId) {
        return Array.prototype.some.call( this.all() , function(task) {
            return task.id === taskId;
        });
    }

    showCount() {
        this.taskCountElement.textContent = this.count();
    }
    
    clear() {
        this.inputElement.value = '';
    }

    queryExistingElements() {
        this.inputElement = document.querySelector('input[name="inputTask"]');
        this.ulElement = document.querySelector('ul');
        this.formElement = document.querySelector('form[name="todoListForm"]');
        this.removeAllTasksButtonElement = document.querySelector('button[name="removeAllTasks"]');
        this.taskCountElement = document.querySelector('b');
        this.addTaskButtonElement = document.querySelector('button[name="addTask"]');
    }

    createElements(task) {
        this.liElement = document.createElement('li');
        this.removeButtonElement = document.createElement('button');

        this.setAttributesElements(task.id);
        this.appendElements(task.name);
    }

    appendElements(taskName) {
        this.liElement.appendChild( document.createTextNode(taskName) );
        this.liElement.appendChild(this.removeButtonElement);
        this.removeButtonElement.appendChild( document.createTextNode('[Remove Task]') );
        this.ulElement.appendChild(this.liElement);
    }

    setAttributesElements(taskId) {
        this.removeButtonElement.setAttribute('type', 'button');
        this.removeButtonElement.setAttribute('name', 'removeTask');
        this.removeButtonElement.setAttribute('value', taskId );
        this.removeButtonElement.setAttribute('class', 'removeTask');        
        this.liElement.setAttribute('id', taskId );
    }
}