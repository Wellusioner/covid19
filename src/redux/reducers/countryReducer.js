import {
    FETCH_COUNTRIES_REQUEST,
    FETCH_COUNTRIES_SUCCESS,
    FETCH_COUNTRIES_ERROR
} from "../constants/country";

const initialState = {
    isFetched: true,
    countries: [],
    error: null
};

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_COUNTRIES_REQUEST:
            return {
                ...state,
                isFetched: false
            };
        case FETCH_COUNTRIES_SUCCESS:
            return {
                ...state,
                countries: [...state.countries, ...action.payload],
                isFetched: true
            };
        case FETCH_COUNTRIES_ERROR:
            return {
                ...state,
                error: action.payload,
                isFetched: true
            };
        default:
            return state
    }
}