import { createStore, combineReducers } from 'redux';
import { mensajes } from './reducers/mensajesReducer';
import { session } from './reducers/sessionReducer';

let reducers = combineReducers({
    mensajes: mensajes,
    session: session
});

let store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;