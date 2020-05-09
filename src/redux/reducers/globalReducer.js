import Actions from '../actions/index'

const initialState = {
    loading: false,
    global: {},
    error: null
};

export default (state = initialState, action) => {

    switch(action.type){
        case Actions.fetchGlobal.REQUEST:
            return {
                ...state,
                loading: true
            };
        case Actions.fetchGlobal.SUCCESS:
            return {
                ...state,
                global: action.payload,
                loading: false
            };
        case Actions.fetchGlobal.ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state
    }
};