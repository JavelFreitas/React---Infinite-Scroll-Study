import { put, takeLatest } from 'redux-saga/effects'
const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export function* changeAsync() {
    yield delay(1000)
    yield put({ type: 'CHANGE' })
}

export function* watchIncrementAsync() {
    yield takeLatest('CHANGE_SAGA', changeAsync)
}