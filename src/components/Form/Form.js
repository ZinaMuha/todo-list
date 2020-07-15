import * as actions from '../../scripts/actions';
import './form.scss';

const Form = () => {
  const _this = document.createElement('form');
  _this.classList.add('form');
  _this.innerHTML = `
    <input class="form__input" placeholder="Type task..." name="input" type="text">
    <button class="form__button" name="add" type="submit">Add</button>
  `;

  const _input = _this.querySelector('input');

  _this.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!_input.value.length) { return; }
    const item = { id: Date.now(), text: _input.value };
    actions.addTask(item);
    _input.value = '';
  });

  return _this;
}

export default Form;