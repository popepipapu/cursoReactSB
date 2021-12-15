import { put, takeEvery } from 'redux-saga/effects';
import { ACTIONS_PRODUCTOS_SUCCESS, ACTIONS_PRODUCTOS_ERROR, ACTIONS_PRODUCTOS_LOADING } from "../actions/productos";
import Api from "../../FakeApi"

async function fetchAsync(func) {
    const response = await func();

    if (response.ok) {
        return await response.json();
    }

    throw new Error("Unexpected error!!!");
}

function* fetchProducts() {
    try {
        const products = yield fetchAsync(Api.getProducts);
        yield put({ type: ACTIONS_PRODUCTOS_SUCCESS, data: products });
    } catch (e) {
        yield put({ type: ACTIONS_PRODUCTOS_ERROR, error: e.message });
    }
}

export function* productSaga() {
    yield takeEvery(ACTIONS_PRODUCTOS_LOADING, fetchProducts);
}

export default productSaga;