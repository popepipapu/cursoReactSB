import { combineReducers } from "redux";
import logs from "./sessionReducer";
import mensajes from "./mensajesReducer";

export const rootReducer = combineReducers (
    {
        mensajesState: mensajes,
        logsState: logs
    }
)