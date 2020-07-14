import * as actions from '../../scripts/actions';
import './form.scss';

const Form = () => {
  const _this = document.createElement('form');
  _this.classList.add('form');

  const _input = document.createElement('input');
  _input.classList.add('form__input');
  _input.placeholder = 'Type task...';
  _input.setAttribute('name', 'input');
  _input.setAttribute('type', 'text');

  const _button = document.createElement('button');
  _button.classList.add('form__button');
  _button.setAttribute('name', 'add');
  _button.setAttribute('type', 'submit');
  _button.innerText = 'Add';

  _this.append(_input, _button);

  _this.addEventListener('submit', function(event) {
    event.preventDefault();
    if (!_input.value.length) { return; }
    const item = { id: Date.now(), text: _input.value };
    actions.addTask(item);
    _input.value = '';
  });

  return _this;
}

export default Form;