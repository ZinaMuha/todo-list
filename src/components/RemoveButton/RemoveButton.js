import * as actions from '../../scripts/actions';
import './remove-button.scss';

const RemoveButton = (id) => {
  const _this = document.createElement('button');
  _this.setAttribute('name', 'remove');
  _this.setAttribute('type', 'button');
  _this.classList.add('remove-button');
  _this.innerHTML = `
    <icon class="remove-button__icon"></icon>
  `;

  _this.addEventListener('click', () => {
    actions.removeTask(id);
    const task = document.getElementById(id);
    const ul = document.querySelector('ul');
    ul.removeChild(task);
  });

  return _this;
}

export default RemoveButton;