import './header.scss';

const classes = ['header', 'sticky'];

const Header = ({ title }) => {
  const _this = document.createElement('header');
  classes.forEach((value) => {
    return _this.classList.add(value);
  });
  _this.innerHTML = `
    <div class="header__holder">
      <h1 class="header__title">${title}</h1>
    </div>
  `;
  return _this;
};

export default Header;