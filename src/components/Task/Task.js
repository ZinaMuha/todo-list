import RemoveButton from '../RemoveButton/RemoveButton';
import * as actions from '../../scripts/actions';
import './task.scss';

const Task = ({ text, isFinished, id=Date.now() }) => {
  const _this = document.createElement('li');
  _this.setAttribute('id', id);
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

export default Task;