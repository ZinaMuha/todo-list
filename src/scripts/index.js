import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Main from '../components/Main/Main';

const title = 'TODO List';
const footerText = 'by Z. Muhamediarova';
const App = document.getElementById('root');
App.appendChild(Header({ title }));
App.appendChild(Main());
App.appendChild(Footer({ text: footerText }));