import { ACTIONS_STYLE } from '../actions/styleChange';

const initialState = {
    styleChange:false
};

export const styleChange = (state = initialState.styleChange, action) => {
    switch (action.type) {
        case ACTIONS_STYLE.CREAR_STYLE:
            state = action.payload;
            return state;
        case ACTIONS_STYLE.LEER_STYLE:
            return state;
        default:
            return state;
    }
}

export default styleChange;