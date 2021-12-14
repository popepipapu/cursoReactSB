export const crearProducto = (msg) => {
    return {
        type: ACTIONS_PRODUCTOS.CREAR,
        payload: msg
    }
}

export const leerProducto = (index) => {
    return {
        type: ACTIONS_PRODUCTOS.LEER,
        payload: index
    }
}

export const vaciarProductos = () => {
    return {
        type: ACTIONS_PRODUCTOS.VACIAR,
    }
}

export const ACTIONS_PRODUCTOS = {
    VACIAR: "VACIAR_PRODUCTOS",
    CREAR: "CREAR_PRODUCTOS",
    LEER: "LEER_PRODUCTOS"
}