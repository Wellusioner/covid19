import { createRoutine } from 'redux-saga-routines'

const fetchCountries = createRoutine('FETCH_COUNTRIES');
const fetchOneCountry = createRoutine('FETCH_COUNTRY');
const fetchGlobal = createRoutine('FETCH_GLOBAL');
const fetchDaily = createRoutine('FETCH_DAILY');

export default {
    fetchCountries,
    fetchOneCountry,
    fetchGlobal,
    fetchDaily
}