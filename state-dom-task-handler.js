class StateDOMTaskHandler {
    
    static enableAddTaskButton() {
        document.querySelector('button[name="addTask"]').removeAttribute('disabled');
    }

    static disableAddTaskButton() {
        document.querySelector('button[name="addTask"]').setAttribute('disabled', 'disabled');
    }

    static enableRemoveAllTasksButton() {
        document.querySelector('button[name="removeAllTasks"]').removeAttribute('disabled');
    }

    static disableRemoveAllTasksButton() {
        document.querySelector('button[name="removeAllTasks"]').setAttribute('disabled', 'disabled');
    }

    static enableVerticalScroll() {
        document.querySelector('ul').setAttribute('style', 'overflow-y:scroll; max-height: 300px;');
    }
}