const tasks = []

function addTask(task, callback) {
    setTimeout(() => {
        if (task === null || task !='string') {
            callback(null, "Task added successfully")
        } else {

        }
    }, 1000);
}