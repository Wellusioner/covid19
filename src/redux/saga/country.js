import { takeLatest, call, put, all } from 'redux-saga/effects'
import * as Constants from '../constants/country'
import { api } from 'services'


function* fetchCountries() {
    try {

        const { countries } = yield call(api.request.get, api.queryBuilder('countries'));

        // Shu kommentni o'chirsa request to'tovsiz ketyapti
        // yield put({
        //     type: Constants.FETCH_COUNTRIES_SUCCESS,
        //     payload: countries
        // })

    } catch (error) {
        yield put({
            type: Constants.FETCH_COUNTRIES_ERROR,
            payload: error
        })
    }
}

export default function* root() {
    yield all([
        takeLatest(Constants.FETCH_COUNTRIES_REQUEST, fetchCountries)
    ])
}