import './footer.scss';

const Footer = ({ text }) => {
  const _this = document.createElement('footer');
  _this.classList.add('footer');
  _this.innerHTML = `
    <div class="footer__holder">
      <p class="footer__text">${text}</p>
    </div>
  `;
  return _this;
};

export default Footer;