import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import userReducer from './reducers';
import watchFetchUser from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(userReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchUser);

export default store;
