import { takeEvery, select, call, put } from 'redux-saga/effects';

import { SWAP_CURRENCY, CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION, CONVERSION_RESULT, CONVERSION_ERROR } from '../actions/currencies';

const getLatestRate = currency => fetch(`https://fixer.handlebarlabs.com/latest?base=${currency}`);

function* fetchLatestConversionRates(action) {
    let currency = action.currency;
    if (!currency) {
        currency = yield select(state => state.currencies.baseCurrency);
    }

    try {
        const response = yield call(getLatestRate, currency);
        const result = yield response.json();

        if (result.error) {
            yield put({ type: CONVERSION_ERROR, error: result.error });
        } else {
            yield put({ type: CONVERSION_RESULT, result });
        }
    } catch (ex) {
        yield put({ type: CONVERSION_ERROR, error: ex.message });
    }
}

export default function* rootSaga() {
    yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
    yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
    yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
}