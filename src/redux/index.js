import { createStore, combineReducers } from 'redux';
import { mensajes } from './reducers/mensajesReducer';
import { session } from './reducers/sessionReducer';
import { productos } from './reducers/productosReducer';
let reducers = combineReducers({
    mensajes: mensajes,
    session: session,
    productos: productos
});

let store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;