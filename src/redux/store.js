import logger from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './saga'


const configureStore = () => {

    const sagaMiddleware = createSagaMiddleware();

    let middlewares = [
        applyMiddleware(sagaMiddleware)
    ];

    if( process.env.NODE_ENV === 'development' ){
        middlewares = [
            applyMiddleware(sagaMiddleware, logger),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ]
    }

    const store = createStore(
        rootReducer,
        compose(...middlewares)
    );

    sagaMiddleware.run(rootSaga);
    store.close = () => store.dispatch(END);

    return store
};


export default configureStore;