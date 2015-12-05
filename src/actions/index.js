import { pinRef, userRef } from '../firebase';

// Pin actions

export const ADD_PIN = 'ADD_PIN';
export const HYDRATE_PINS = 'HYDRATE_PINS';
export const REMOVE_ALL_PINS = 'REMOVE_ALL_PINS';

// User actiona

export const UPDATE_MAP_PREFS = 'UPDATE_MAP_PREFS';
export const MAP_OPTIONS_RECEIVE = 'MAP_OPTIONS_RECEIVE';

export function addPin(pin) {

    // Add the pin into firebase

    pinRef.push(pin);

    return {
        type: ADD_PIN,
        data: pin
    };
}

export function updateMapPrefs(prefs) {

    console.log(prefs);

    userRef.child('matt/preferences/mapOptions').set(prefs);

    return {
        type: UPDATE_MAP_PREFS,
        data: prefs
    };
}

export function removeAllPins() {

    pinRef.set(null);

    return {
        type: REMOVE_ALL_PINS
    };
}

export function hydrate(state) {

    // Hydrate the app with pins from firebase

    return {
        type: HYDRATE_PINS,
        data: state
    };
}
