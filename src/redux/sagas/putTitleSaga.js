import axios from 'axios';
import { put, takeLatest} from 'redux-saga/effects';

function* putTitle(action) {
    console.log(`In putTitleSaga`);
    console.log(action.payload)
    try {
        const response = yield axios({
            method: 'PUT',
            url: '/putMovies/title/' + action.payload.id,
            data: action.payload
        });
        // yield call(getDetailsSaga);
        yield put({
            type: 'SET_TITLE',
            payload: action.payload.id,
            // payload: response.data
        });
    } catch(err) {
        console.log('put title error', err);
    }
}


function* putTitleSaga() {
    yield takeLatest('PUT_TITLE', putTitle);
}

export default putTitleSaga;