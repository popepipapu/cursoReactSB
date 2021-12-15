export const cambiarStyle = (msg) => {
    return {
        type: ACTIONS_STYLE.CREAR_STYLE,
        payload: msg
    }
}

export const leerStyle = (index) => {
    return {
        type: ACTIONS_STYLE.LEER_STYLE,
        payload: index
    }
}

export const ACTIONS_STYLE = {
    CREAR_STYLE: "CREAR_STYLE",
    LEER_STYLE: "LEER_STYLE"
}