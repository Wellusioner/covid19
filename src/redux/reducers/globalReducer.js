import {
    FETCH_GLOBAL_REQUEST,
    FETCH_GLOBAL_SUCCESS,
    FETCH_GLOBAL_ERROR
} from '../constants/global'

const initialState = {
    loading: false,
    global: {},
    error: null
};

export default (state = initialState, action) => {

    switch(action.type){
        case FETCH_GLOBAL_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_GLOBAL_SUCCESS:
            return {
                ...state,
                global: action.payload,
                loading: false
            };
        case FETCH_GLOBAL_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state
    }
};