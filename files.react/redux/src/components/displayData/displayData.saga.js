import { call, put, takeEvery, fork } from 'redux-saga/effects';
import { fetchDataFromDBOnce } from '../../services/api';
import { fetchRequestSuccess, fetchRequestFailed } from './displayData.actions';

export function* fetchDatas() {
    try {
        const portfolios = yield call(fetchDataFromDBOnce, 'userList');
        yield put(fetchRequestSuccess(portfolios));
    } catch (error) {
        yield put(fetchRequestFailed(error));
    }
}

export function* watchDisplayDataFetch() {
    yield fork(takeEvery, 'FETCH_DISPLAYDATA_STARTED', fetchDatas);
}
