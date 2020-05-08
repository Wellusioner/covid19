import axios from 'axios'
import buildUrl from 'build-url'
import config from 'config'

axios.defaults.params = {};
axios.defaults.params['_f'] = 'json';

const queryBuilder = (url='', fields=[], include=[], filter={}, limit=0, sort='') => {

    let query = {};

    return buildUrl({
        path: url,
        queryParams: query
    })
};

export default {
    request: axios.create({
        baseURL: config.API_ROOT
    }),
    queryBuilder
}