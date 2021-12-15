export const ACTIONS_PRODUCTOS_SUCCESS = 'LEER_PRODUCTOS';
export const ACTIONS_PRODUCTOS_ERROR = 'ERROR_PRODUCTOS';
export const ACTIONS_PRODUCTOS_LOADING = 'LOADING_PRODUCTOS';

export const loadProducts = () => {
    return {
      type: ACTIONS_PRODUCTOS_LOADING,
    };
};