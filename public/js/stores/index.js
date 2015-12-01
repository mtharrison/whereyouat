import { createStore } from 'redux';

const store = createStore((state = { pins: [] }, action) => {

    switch(action.type) {
        case 'NEW_PIN':
            return Object.assign({}, state, {
                pins: [...state.pins, action.data]
            });
        break;
    }

    return state;
});

export default store;
