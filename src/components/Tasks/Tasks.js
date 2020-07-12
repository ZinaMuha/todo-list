import Task from '../Task/Task';
import './tasks.scss';

const list = [{
  text: '1 task',
  isFinished: false,
}, {
  text: '2 task',
  isFinished: true,
}];

const Tasks = () => {
  const _this = document.createElement('section');
  _this.classList.add('tasks');
  const _holder = document.createElement('div');
  _holder.classList.add('tasks__holder');
  const _list = document.createElement('ul');
  _list.classList.add('tasks__list');

  list.map((item, index) => {
    return _list.appendChild(Task(item));
  });
  
  _holder.appendChild(_list);
  _this.appendChild(_holder);

  return _this;
}

export default Tasks;