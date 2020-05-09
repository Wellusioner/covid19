import { combineReducers } from 'redux'
import global from './globalReducer.js'
import countries from './countryReducer'
import daily from './dailyReducer'

export default combineReducers({
    data: global,
    countries,
    daily
})