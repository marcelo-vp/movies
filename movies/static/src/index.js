import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

render(<App/>, document.querySelector('#app'));

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default;
        render(<NextApp/>, document.querySelector('#app'))
    });
}
