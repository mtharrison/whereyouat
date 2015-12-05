import * as Actions from '../actions';
import Firebase from 'firebase';

const BASE_URL = 'https://glowing-torch-7828.firebaseio.com';

export const ref = new Firebase(BASE_URL);

// Listens on Firebase updates and dispatches
// appropriate events to store

export function hookupStore(store) {

    ref.child('pins').limitToLast(5).on('value', (snapshot) => {

        store.dispatch({ type: Actions.HYDRATE_PINS, data: snapshot.val()});
    });

    ref.child('users/matt/preferences/mapOptions').once('value', (snapshot) => {

        store.dispatch({ type: Actions.MAP_OPTIONS_RECEIVE, data: snapshot.val() });
    });

    ref.onAuth((authData) => {

        store.dispatch({ type: Actions.AUTH_DATA_RECEIVE, data: authData });
    });
}