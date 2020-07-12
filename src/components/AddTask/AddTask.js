import Field from '../Field/Field';
import './add-task.scss';

const AddTask = () => {
  const _this = document.createElement('section');
  _this.classList.add('add-task');
  const _holder = document.createElement('div');
  _holder.classList.add('add-task__holder');

  _holder.appendChild(Field());
  _this.appendChild(_holder);

  return _this;
};

export default AddTask;