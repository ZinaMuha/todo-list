import Task from '../Task/Task';
import './tasks.scss';

const Tasks = (list) => {
  const _this = document.createElement('section');
  _this.classList.add('tasks');
  const _holder = document.createElement('div');
  _holder.classList.add('tasks__holder');
  const _list = document.createElement('ul');
  _list.classList.add('tasks__list');

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
  
  _this.appendChild(_holder).appendChild(_list);

  return _this;
}

export default Tasks;