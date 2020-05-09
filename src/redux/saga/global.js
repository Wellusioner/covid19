import { takeLatest, call, put, all } from 'redux-saga/effects'
import Actions from '../actions/index'
import { api } from 'services'

function* fetchGlobal(){
    try{
        const { data: { confirmed, recovered, deaths, lastUpdate } } = yield call(api.request.get);

        yield put(Actions.fetchGlobal.success({
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }))

    }catch (error){
        yield put(Actions.fetchGlobal.error(error))
    }
}

function* fetchDaily(){
    try{

        const { data } = yield call(api.request.get, api.queryBuilder('daily'));
        const total = data.map(item => ({
            confirmed: item.confirmed.total,
            deaths: item.deaths.total,
            date: item.reportDate
        }));

        yield put(Actions.fetchDaily.success([...total]))

    } catch(error){
        yield put(Actions.fetchDaily.error(error))
    }
}

export default function* root(){
    yield all([
        takeLatest(Actions.fetchGlobal.REQUEST, fetchGlobal),
        takeLatest(Actions.fetchDaily.REQUEST, fetchDaily)
    ])
}