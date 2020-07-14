import RemoveButton from '../RemoveButton/RemoveButton';
import * as actions from '../../scripts/actions';
import './task.scss';

const Task = ({ text, isFinished, id=Date.now() }) => {
  const _this = document.createElement('li');
  _this.id = id;
  _this.draggable = true;
  _this.classList.add('task');

  const _label = document.createElement('label');
  _label.classList.add('task__box');

  const _text = document.createElement('span');
  _text.classList.add('task__text');
  _text.innerText = text;

  const checked = isFinished ? 'checked' : '';
  const input = new Input({ id, checked });

  _label.append(input, _text);

  const button = new RemoveButton(id);
  _this.append(_label, button);

  _this.addEventListener(`dragstart`, dragStart);
  _this.addEventListener(`dragend`, dragEnd);
  _this.addEventListener(`dragover`, dragOver);

  return _this;
};

const Input = ({ id, checked }) => {
  const _this = document.createElement('input');
  _this.setAttribute('type', 'checkbox');
  _this.classList.add('task__checkbox');
  _this.checked = checked;

  _this.addEventListener('change', () => {
    const isFinished = _this.checked;
    actions.editTask({ id, isFinished });
  });

  return _this;
}

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