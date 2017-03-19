import {createStore} from 'redux';

const reducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return [
                ...state,
                action.payload
            ];
        case 'UPDATE_MOVIE':
            return state.map((value, i) => i !== parseInt(action.payload.pageid) ? value : {...value, ...action.payload})
        case 'INIT':
            return action.payload;
        default:
            return state;
    }
};

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());

