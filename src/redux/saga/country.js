import { takeLatest, call, put, all } from 'redux-saga/effects'
import Actions from '../actions/index'
import { api } from 'services'


function* fetchCountries() {
    try {

        const {data: { countries }} = yield call(api.request.get, api.queryBuilder('countries'));

        yield put(Actions.fetchCountries.success(countries));

    } catch (error) {
        yield put(Actions.fetchCountries.error(error));
    }
}

function* fetchOneCountry({ payload }){
    try{

        const options = payload ? api.queryBuilder(`countries/${payload.name}`) : null;
        const { data: { confirmed, deaths, recovered, lastUpdate} } = yield call(api.request.get, options);

        yield put(Actions.fetchGlobal.success({
            confirmed,
            deaths,
            recovered,
            lastUpdate
        }))
    } catch(error){

    }
}


export default function* root() {
    yield all([
        takeLatest(Actions.fetchCountries.REQUEST, fetchCountries),
        takeLatest(Actions.fetchOneCountry.REQUEST, fetchOneCountry),
    ])
}