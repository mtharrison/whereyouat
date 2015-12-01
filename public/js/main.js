import Firebase from 'firebase';
import React from 'react';
import { render } from 'react-dom';
import Store from './stores';

// Load components

import App from './components/app';

// Create redux store

Store.subscribe(() => {

    render(<App state={Store.getState()}/>, document.getElementById('app'));
});

// Hook up with data providers from Firebase + Redux actions

const pinRef = new Firebase('https://glowing-torch-7828.firebaseio.com/pins');

pinRef.on('child_added', (snapshot) => {

    Store.dispatch({ type: 'NEW_PIN', data: snapshot.val() });
});
