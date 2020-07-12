'use strict';

// polyfills
import Stickyfill from 'stickyfilljs';

const elements = document.querySelectorAll('.sticky');
Stickyfill.add(elements);