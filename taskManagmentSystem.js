//- Initialize an empty array named tasks to store task names.

//SAMUELE BERTI
/*1-Function to Add a Task:
-Define a function named addTask that takes two parameters:
- task: A string representing the task to add.
- callback: A callback function to handle the result.*/

//MAURILIO VALENTI
/*2-Inside the addTask function, use setTimeout to simulate an asynchronous operation.
-If the task parameter is empty or not a string, invoke the callback function with
an Error object containing the message "Task must be a non-empty string".
- Otherwise, add the task to the tasks array and invoke the callback function with null
as the first parameter and the message "Task added successfully" as the second parameter.*/

//NUNZIA BIELE
/*3-Function to Complete a Task:
-Define a function named completeTask that takes two parameters:
index: An integer representing the index of the task to complete.
callback: A callback function to handle the result.*/

//PAOLO SCAPINELLO
/*4-Inside the completeTask function, use setTimeout to simulate an asynchronous operation.
-If the index parameter is out of range (less than 0 or greater than or equal to the length of the tasks array),
invoke the callback function with an Error object containing the message "Invalid task index".
-Otherwise, remove the task at the specified index from the tasks array and invoke the callback function with null
as the first parameter and the message "Task completed successfully" as the second parameter.*/

//STANISLAO TUFO
/*5-Function to List Tasks:
Define a function named listTasks that does not take any parameters.
Inside the listTasks function, log each task in the tasks array to the console, along with its corresponding index.*/

const tasks = [];

function addTask(task, callback) {
  setTimeout(() => {
    if (!task || typeof task != "string") {
      callback(new Error("Task must be a non-empty string"), null);
    } else {
      tasks.push(task);
      callback(null, "Task added successfully");
    }

    tasks.forEach((element) => console.log(element));
  }, 1000);
}

function completeTask(index, callback) {
  setTimeout(() => {
    if (index < 0 || index >= tasks.length) {
      callback(new Error("Invalid task index"));
    } else {
      tasks.slice(index, 1);
      callback(null, "Task completed successfully");
    }
  }, 2000);
}

addTask("Dare cibo al cane", (data, error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
addTask("Fare la spesa", (data, error) => {
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

function listTask(tasks) {
  tasks.forEach((task, index) => {
    console.log(`Task ${index + 1}: ${task}`);
  });
}

listTask(tasks);
