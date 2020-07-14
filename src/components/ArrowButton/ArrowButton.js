import * as actions from '../../scripts/actions';
import './arrow-button.scss';

const ArrowButton = ({ isUpDirection=false, id }) => {
  const _this = document.createElement('button');
  _this.setAttribute('name', 'remove');
  _this.setAttribute('type', 'button');
  const arrow = isUpDirection ? 'up' : 'down';
  _this.classList.add(`arrow-button`, `arrow-button_${arrow}`);
  _this.innerHTML = `<span class="arrow-button__icon"></span>`;

  _this.addEventListener('click', () => {
    const item = document.getElementById(id);
    const itemsArr = Array.prototype.slice.call(document.querySelectorAll('.task'));
    const index = itemsArr.indexOf(item);
    const list = item.closest('.tasks__list');

    if (isUpDirection) {
      const nextChild = itemsArr[index-1];
      if (item === list.firstChild) { return; }
      list.insertBefore(item, nextChild);
    } else {
      const nextChild = itemsArr[index+1];  
      list.insertBefore(item, nextChild ? nextChild.nextSibling : null);
    }

    const items = document.querySelectorAll('.task');
    saveTasks(items)
  });

  return _this;
}

function saveTasks(items) {
  const arr = actions.getTasks();
  let newArr = [];
  items.forEach((element, index) => {
    const item = arr.find((item) => item.id === +element.id);
    newArr[index] = item;
  });
  actions.setTasks(newArr);
}

export default ArrowButton;