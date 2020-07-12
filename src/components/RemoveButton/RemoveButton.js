import './remove-button.scss';

const RemoveButton = () => {
  const _this = document.createElement('button');
  _this.setAttribute('name', 'remove')
  _this.setAttribute('type', 'button');
  _this.classList.add('remove-button');
  _this.innerHTML = `
    <icon class="remove-button__icon"></icon>
  `;

  return _this;
}

export default RemoveButton;