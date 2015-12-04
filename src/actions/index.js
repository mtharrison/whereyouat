import { pinRef, userRef } from '../firebase';

const ADD_PIN = 'ADD_PIN';
const HYDRATE = 'HYDRATE_PINS';
const UPDATE_MAP_PREFS = 'UPDATE_MAP_PREFS';

export function addPin(pin) {

    // Add the pin into firebase

    pinRef.push(pin);

    return {
        type: ADD_PIN,
        data: pin
    }
}

export function updateMapPrefs(prefs) {

    debugger;
    userRef.child('matt/preferences/mapOptions').set(prefs);

    return {
        type: UPDATE_MAP_PREFS,
        data: prefs
    }
}

export function hydrate(state) {

    // Hydrate the app with pins from firebase

    return {
        type: HYDRATE_PINS,
        data: state
    };
}
