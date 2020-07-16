import RemoveButton from '../RemoveButton/RemoveButton';
import * as actions from '../../scripts/actions';
import './task.scss';

const Task = ({ text, isFinished, id=Date.now() }) => {
  const _this = document.createElement('li');
  _this.id = id;
  _this.draggable = true;
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
  _this.append(button);

  _this.addEventListener(`dragstart`, dragStart);
  _this.addEventListener(`dragend`, dragEnd);
  _this.addEventListener(`dragover`, dragOver);

  return _this;
};

function dragStart(event) {
  event.currentTarget.classList.add(`drag`);
}

function dragEnd(event) {
  event.currentTarget.classList.remove(`drag`);
  const arr = actions.getTasks();
  let newArr = [];
  const tasksElements = document.querySelectorAll(`.task`);
  tasksElements.forEach((element, index) => {
    const item = arr.find((item) => item.id === +element.id);
    newArr[index] = item;
  });
  actions.setTasks(newArr);
}

function dragOver(event) {
  event.preventDefault();
  const { currentTarget } = event;
  const dragged = document.querySelector(`.drag`);   
  const next = currentTarget === dragged.nextElementSibling ? currentTarget.nextElementSibling : currentTarget;      
  const tasksList = document.querySelector(`.tasks__list`);
  tasksList.insertBefore(dragged, next);
}

export default Task;