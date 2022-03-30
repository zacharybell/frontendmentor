import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';

const body = document.getElementsByTagName('BODY')[0];
const root = document.createElement('div');

body.prepend(root);

ReactDOM.render(<h1>Hello World</h1>, root);