// polyfills
import Stickyfill from 'stickyfilljs';
import 'custom-event-polyfill';

const elements = document.querySelectorAll('.sticky');
Stickyfill.add(elements);