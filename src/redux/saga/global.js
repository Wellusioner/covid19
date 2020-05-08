import { takeLatest, call, put, all } from 'redux-saga/effects'
import * as Constants from '../constants/global'
import { api } from 'services'

function* fetchGlobal(){

    try{
        const { data: { confirmed, recovered, deaths, lastUpdate } } = yield call(api.request.get);
        yield put({
            type: Constants.FETCH_GLOBAL_SUCCESS,
            payload: {
                confirmed, recovered, deaths, lastUpdate
            }
        })

    }catch (error){
        yield put({
            type: Constants.FETCH_GLOBAL_ERROR,
            payload: error
        })
    }
}

export default function* root(){
    yield all([
        takeLatest(Constants.FETCH_GLOBAL_REQUEST, fetchGlobal)
    ])
}