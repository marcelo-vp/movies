import 'core-js/stable'
import 'regenerator-runtime/runtime';
// Try to remove the imports above, since they
// are only required for async/await to work

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App/>, document.querySelector('#app'));
