// Pin actions

export const ADD_PIN = 'ADD_PIN';
export const HYDRATE_PINS = 'HYDRATE_PINS';
export const REMOVE_ALL_PINS = 'REMOVE_ALL_PINS';

// User actions

export const UPDATE_MAP_PREFS = 'UPDATE_MAP_PREFS';
export const MAP_OPTIONS_RECEIVE = 'MAP_OPTIONS_RECEIVE';

export const AUTH_DATA_RECEIVE = 'AUTH_DATA_RECEIVE';
export const AUTH_LOGIN_ATTEMPT = 'AUTH_LOGIN_ATTEMPT';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAIL = 'AUTH_LOGIN_FAIL';
export const AUTH_LOGOUT_ATTEMPT = 'AUTH_LOGOUT_ATTEMPT';

export function addPin(pin) {

    return (dispatch, getState) => {

        const { firebase } = getState();
        firebase.child('pins').push(pin);

        dispatch({
            type: ADD_PIN,
            data: pin
        });
    };
}

export function updateMapPrefs(prefs) {

    return (dispatch, getState) => {

        const { firebase } = getState();
        firebase.child('users/matt/preferences/mapOptions').set(prefs);

        dispatch({
            type: UPDATE_MAP_PREFS,
            data: prefs
        });
    };
}

export function removeAllPins() {

    return (dispatch, getState) => {

        const { firebase } = getState();
        firebase.child('pins').set(null);

        dispatch({
            type: REMOVE_ALL_PINS
        });
    };
}

export function hydrate(state) {

    // Hydrate the app with pins from firebase

    return {
        type: HYDRATE_PINS,
        data: state
    };
}

export function loginAttempt() {

    return (dispatch, getState) => {

        const { firebase } = getState();

        firebase.authWithOAuthRedirect("google", (err, data) => {

            if (err) return dispatch({ type: AUTH_LOGIN_FAIL, data: err });
            dispatch({ type: AUTH_LOGIN_SUCCESS, data: data });
        });

        dispatch({
            type: AUTH_LOGIN_ATTEMPT
        });
    }
}

export function logoutAttempt() {

    return (dispatch, getState) => {

        const { firebase } = getState();

        firebase.unauth();

        dispatch({
            type: AUTH_LOGOUT_ATTEMPT
        });
    }
}
