import { all } from 'redux-saga/effects';
import { watchDisplayDataFetch } from '../components/displayData/displayData.saga';


export default function* sagaApp() {
    yield all([
        watchDisplayDataFetch(),
    ]);
}
