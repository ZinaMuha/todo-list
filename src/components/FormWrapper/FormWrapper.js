import Form from '../Form/Form';
import './form-wrapper.scss';

const FormWrapper = () => {
  const _this = document.createElement('section');
  _this.classList.add('form-wrapper');
  const _holder = document.createElement('div');
  _holder.classList.add('form-wrapper__holder');

  const form = new Form();
  _this.appendChild(_holder).appendChild(form);

  return _this;
};

export default FormWrapper;