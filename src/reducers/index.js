export default function reducer (state, action) {

    switch(action.type) {
        case 'HYDRATE_PINS':
            return Object.assign({}, state, {
                pins: action.data || {}
            });
        case 'MAP_OPTIONS_UPDATE':
            return Object.assign({}, state, {
                mapOptions: action.data
            });
        case 'ADD_PIN':
            return state
    }

    return state;
}
