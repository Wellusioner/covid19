import { combineReducers } from 'redux'
import global from './globalReducer.js'
import countries from './countryReducer'

export default combineReducers({
    data: global,
    countries
})