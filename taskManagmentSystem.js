const tasks = []

function addTask(task, callback) {
    setTimeout(() => {
        if (task === null || typeof task != 'string') {
            callback(new Error("Task must be a non-empty string"), null)
        } else {
            tasks.push(task)
            callback(null, "Task added successfully")
        }
       
        tasks.forEach((element) => console.log(element))
    }, 1000);
}

function completeTask(index, callback) {
   setTimeout(() => {
    if(index < 0 || index >= tasks.length) {
        callback(new Error("Invalid task index"))
    } else { 
        tasks.slice(index, 1)
        callback(null, "Task completed successfully" )
    }
   }, 2000);
}
 
function listTask() {
   tasks.forEach((task, index) => {console.log(`Task ${index + 1}: ${task}`)})
}


  addTask(`Dare cibo al cane`, (data, error) => {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  });

  completeTask(0, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  });



  listTask()