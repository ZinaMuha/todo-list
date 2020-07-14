import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Main from '../components/Main/Main';
import './polyfills';

const App = document.getElementById('root');
const main = new Main();
const header = new Header({ title: 'TODO List' });
const footer = new Footer({ text: 'by Z. Muhamediarova' });

App.append(header, main, footer);