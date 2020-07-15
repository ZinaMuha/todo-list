import RemoveButton from '../RemoveButton/RemoveButton';
import ArrowButton from '../ArrowButton/ArrowButton';
import * as actions from '../../scripts/actions';
import './task.scss';

const Task = ({ text, isFinished, id=Date.now() }) => {
  const _this = document.createElement('li');
  _this.setAttribute('id', id);
  _this.classList.add('task');

  const checked = isFinished ? 'checked' : '';
  _this.innerHTML = `
    <label class="task__box">
      <input type="checkbox" class="task__checkbox" ${checked}>
      <span class="task__text">${text}</span>
    </label>
  `;

  const _input = _this.querySelector('input');
  _input.addEventListener('change', () => {
    const isFinished = _input.checked;
    actions.editTask({ id, isFinished });
  });

  const button = new RemoveButton(id);
  const arrowUp = new ArrowButton({ isUpDirection: true, id });
  const arrowDown = new ArrowButton({ id });
  _this.append(arrowUp, arrowDown, button);

  return _this;
};

export default Task;