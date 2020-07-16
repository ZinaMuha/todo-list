import Form from '../Form/Form';
import './form-wrapper.scss';

const FormWrapper = () => {
  const _this = document.createElement('section');
  _this.classList.add('form-wrapper');
  _this.innerHTML = `
    <div class="form-wrapper__holder"></div>
  `;
  const _holder = _this.querySelector('.form-wrapper__holder');

  const form = new Form();
  _holder.appendChild(form);

  return _this;
};

export default FormWrapper;