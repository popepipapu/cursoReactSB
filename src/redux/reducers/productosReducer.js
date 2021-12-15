import { ACTIONS_PRODUCTOS_SUCCESS, ACTIONS_PRODUCTOS_ERROR, ACTIONS_PRODUCTOS_LOADING } from '../actions/productos';

const initialState = {
    data: [],
    loading: false,
    error: ''
};

export default function reduxSagaReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS_PRODUCTOS_LOADING:
            return {
                ...state,
                loading: true,
                error: ''
            };
        case ACTIONS_PRODUCTOS_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false
            }
        case ACTIONS_PRODUCTOS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };

        default:
            return state;
    }
}