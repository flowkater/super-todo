import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './containers';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

const store = createStore(reducers, compose(window.devToolsExtension ? window.devToolsExtension() : f => f));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
