import { FETCH_COUNTRIES_REQUEST } from "../constants/country";


export const countriesRequest = () => {
    return {
        type: FETCH_COUNTRIES_REQUEST
    }
};