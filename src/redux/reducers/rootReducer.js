import { combineReducers } from "redux";
import { mensajes } from './mensajesReducer';
import { styleChange } from './styleChangeReducer';
import { default as productos } from './productosReducer';

const  reducers = combineReducers({
    mensajes,
    styleChange,
    productos
});
export default reducers;