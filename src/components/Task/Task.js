import RemoveButton from '../RemoveButton/RemoveButton';
import './task.scss';

const Task = ({ text, isFinished }) => {
  const _this = document.createElement('li');
  _this.classList.add('task');
  const checked = isFinished ? 'checked' : '';
  _this.innerHTML = `
    <label class="task__box">
      <input type="checkbox" class="task__checkbox" ${checked}></input>
      <div class="task__text">${text}</div>
    </label>
  `;

  _this.appendChild(RemoveButton());

  return _this;
};

export default Task;