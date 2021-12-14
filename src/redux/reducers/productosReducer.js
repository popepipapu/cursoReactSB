import { ACTIONS_PRODUCTOS } from '../actions/productos';

const initialState = {
    productos: []
};

export const productos = (state = initialState.productos, action) => {
    switch (action.type) {
        case ACTIONS_PRODUCTOS.VACIAR:
            return [];
        case ACTIONS_PRODUCTOS.CREAR:
            state.push(action.payload);
            return state;
        case ACTIONS_PRODUCTOS.LEER:
            state = action.payload;
            return state;
        default:
            return state;
    }
}

export default productos;