import React from 'react';
import { render } from 'react-dom';
import * as Firebase from './firebase';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';

// Get store

const initialState = { 
    pins: {}, 
    mapOptions: {}, 
    auth: { data: null }, 
    firebase: Firebase.ref,
    logs: []
};
const store = configureStore(initialState);

// Hookup with firebase

Firebase.hookupStore(store);

// Initial render

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
