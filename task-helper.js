class TaskHelper {

    static generateId(taskName, separatorSplit = ' ', separatorJoin = '-') {
        return taskName.split(separatorSplit).join(separatorJoin).toLowerCase();
    }    
}
