export function addTask(task) {
  const tasksArr = getTasks();
  tasksArr.unshift(task);
  setTasks(tasksArr);

  const event = new CustomEvent('addTask', { detail: { task }});
  document.dispatchEvent(event);
};

export function removeTask(id) {
  const tasksArr = getTasks();
  const newTasksArr = tasksArr.filter((task) => task.id !== +id);
  setTasks(newTasksArr);

  const event = new CustomEvent('removeTask', { detail: { taskId: id }});
  document.dispatchEvent(event);
};

export function editTask(newTask) {
  const tasksArr = getTasks();
  const { id } = newTask;
  const newTasksArr = tasksArr.map((item) => {
    if (item.id === +id) {
      return { ...item, ...newTask }
    };
    return item;
  });
  setTasks(newTasksArr);
}

export function getTasks() {
  const tasks = localStorage.getItem('tasks') || [];
  try {
    return JSON.parse(tasks);
  } catch {
    return [];
  }
}

export function setTasks(tasksArr) {
  const tasks = JSON.stringify(tasksArr);
  localStorage.setItem('tasks', tasks);
}