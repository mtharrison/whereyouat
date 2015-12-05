import * as Actions from '../actions';

export default function reducer (state, action) {

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
        case Actions.AUTH_DATA_RECEIVE:
            return Object.assign({}, state, {
                auth: { data: action.data }
            });
        case Actions.RECENT_PIN_CLICKED:
            return Object.assign({}, state, {
                mapOptions: {
                    center: {
                        lat: action.data.lat,
                        lng: action.data.lng
                    },
                    zoom: 18
                }
            });
    }

    return state;
}
