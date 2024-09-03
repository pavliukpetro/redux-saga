import { call, put, takeEvery } from 'redux-saga/effects';
const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

import {
    FETCH_USERS_REQUEST,
    fetchUsersFailure,
    fetchUsersSuccess,
} from './actions';

function fetchUsersApi() {
    return fetch(USERS_URL);
}

function* fetchUsersSaga() {
    try {
        const response = yield call(fetchUsersApi);

        const data = yield response.json();
        yield put(fetchUsersSuccess(data));
    } catch (error) {
        console.log(error);
        yield put(fetchUsersFailure(error));
    }
}

function* watchFetchUser() {
    yield takeEvery(FETCH_USERS_REQUEST, fetchUsersSaga);
}

export default watchFetchUser;
