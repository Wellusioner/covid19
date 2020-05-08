import { all, fork } from 'redux-saga/effects'
import globalData from './global'
import getCountries from './country'


export default function* rootSaga() {
    yield all([
        fork(globalData),
        fork(getCountries)
    ])
}