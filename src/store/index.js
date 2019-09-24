import { createStore, applyMiddleware } from 'redux';
import loggerMiddleWare from 'redux-logger';
//import createSagaMiddleWare from 'redux-saga';
import rootReducer from './reducers';
//import rootSaga from './sagas';
import thunkMiddleware from 'redux-thunk';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
    blacklist: [
        'alert',
        'state'
    ]
}
  
const persistedReducer = persistReducer(persistConfig, rootReducer)
//const sagaMiddleware = createSagaMiddleWare();
//sagaMiddleware.run(rootSaga)

export default createStore(
    persistedReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleWare,
       // sagaMiddleware
    )
)