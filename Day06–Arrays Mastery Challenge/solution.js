const tasks = [];

function addTask(taskName) {
  tasks.push(taskName);
}

function completeTask(taskName) {
  const index = tasks.indexOf(taskName);
  if (index > -1) {
    tasks.splice(index, 1);
  }
}

function listTasks() {
  tasks.forEach((task, idx) => {
    console.log(`${idx + 1}. ${task}`);
  });
}

// Sample Usage:
addTask("Learn JavaScript");
addTask("Build a portfolio");
listTasks();
completeTask("Learn JavaScript");
listTasks();
