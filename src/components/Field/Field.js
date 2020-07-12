import './field.scss';

const Field = () => {
  const _this = document.createElement('div');
  _this.classList.add('field');

  const _input = document.createElement('input');
  _input.classList.add('field__input');
  _input.setAttribute('name', 'input');
  _input.setAttribute('type', 'text');

  const _button = document.createElement('button');
  _button.classList.add('field__button');
  _button.setAttribute('name', 'add');
  _button.setAttribute('type', 'submit');
  _button.innerText = 'Add';

  _this.appendChild(_input);
  _this.appendChild(_button);

  return _this;
}

export default Field;