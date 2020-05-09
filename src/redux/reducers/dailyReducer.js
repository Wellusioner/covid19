import Actions from '../actions'


const initialState = {
    data: [],
    isFetched: true,
    error: null
};

export default (state=initialState, action) => {
    switch(action.type){
        case Actions.fetchDaily.REQUEST:
            return {
                ...state,
                isFetched: false
            };
        case Actions.fetchDaily.SUCCESS:
            return {
                ...state,
                data: [...state.data, ...action.payload],
                isFetched: true
            };
        case Actions.fetchDaily.ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state

    }
}