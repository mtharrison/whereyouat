import * as Actions from '../actions';

export default function reducer (state, action) {

    console.log(action.type, action.data);

    switch(action.type) {
        case Actions.HYDRATE_PINS:
            return Object.assign({}, state, {
                pins: action.data || {}
            });
        case Actions.MAP_OPTIONS_RECEIVE:
        case Actions.UPDATE_MAP_PREFS:
            return Object.assign({}, state, {
                mapOptions: action.data
            });
        case Actions.ADD_PIN:
        case Actions.REMOVE_ALL_PINS:
            return state
    }

    return state;
}
