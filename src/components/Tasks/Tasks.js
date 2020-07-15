import Task from '../Task/Task';
import './tasks.scss';

const Tasks = (list) => {
  const _this = document.createElement('section');
  _this.classList.add('tasks');
  _this.innerHTML = `
    <div class="tasks__holder">
      <ul class="tasks__list"></ul>
    </div>
  `;

  const _list = _this.querySelector('ul');
  list.map((item) => {
    const task = new Task(item);
    return _list.appendChild(task);
  });

  document.addEventListener('addTask', ({ detail }) => {
    const { task } = detail;
    const newTask = new Task(task);
    _list.insertBefore(newTask, _list.firstChild);
  });

  document.addEventListener('removeTask', ({ detail }) => {
    const { taskId } = detail;
    const task = document.getElementById(taskId);
    _list.removeChild(task);
  });
  
  return _this;
}

export default Tasks;