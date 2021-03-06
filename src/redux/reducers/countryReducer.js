import Actions from "../actions";

const initialState = {
    isFetched: true,
    countries: [],
    error: null
};

export default (state = initialState, action) => {
    switch(action.type){
        case Actions.fetchCountries.REQUEST:
            return {
                ...state,
                isFetched: false
            };
        case Actions.fetchCountries.SUCCESS:
            return {
                ...state,
                countries: [...state.countries, ...action.payload],
                isFetched: true
            };
        case Actions.fetchCountries.ERROR:
            return {
                ...state,
                error: action.payload,
                isFetched: true
            };
        default:
            return state
    }
}