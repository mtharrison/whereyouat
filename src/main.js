import React from 'react';
import { render } from 'react-dom';
import { pinRef, userRef } from './firebase';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';

// Get store

const initialState = { pins: {}, mapOptions: {} };
const store = configureStore(initialState);

// Initial render

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

// Hook up firebase

pinRef.limitToLast(5).on('value', (snapshot) => {
    store.dispatch({ type: 'HYDRATE_PINS', data: snapshot.val()}) 
});

userRef.child('matt/preferences/mapOptions').once('value', (snapshot) => {
    store.dispatch({ type: 'MAP_OPTIONS_RECEIVE', data: snapshot.val() })
});
