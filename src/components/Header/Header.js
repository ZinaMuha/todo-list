import './header.scss';

const Header = ({ title }) => {
  const _this = document.createElement('header');
  _this.classList.add('header');
  _this.innerHTML = `
    <div class="header__holder">
      <h1 class="header__title">${title}</h1>
    </div>
  `;
  return _this;
};

export default Header;