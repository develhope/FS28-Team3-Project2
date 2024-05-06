const tasks = []

function addTask(task, callback) {
    setTimeout(() => {
        if (task === null || task != 'string') {
            callback("Task must be a non-empty string")
        } else {
            callback(null, "Task added successfully")
        }
    }, 1000);
}