import { all, call, put, takeEvery, select } from "redux-saga/effects";
import { getCatsSuccess } from "./slices/getPostsSlice";
import { getPostsOfcats } from "../api/api";

function* fetchCatPostsSagaWorker() {

      const cats = yield call(getPostsOfcats);
      const entries = yield select(count => count.rootReducer.cats.countOfCats);
      const cutCatsList = cats.slice(0, entries);
      yield put(getCatsSuccess(cutCatsList));
}

export function* catSaga() {
      yield takeEvery('cats/getCatsFetch', fetchCatPostsSagaWorker);
}

export default function* rootSaga() {
      yield all([catSaga()]);
}


// ====================================================================================
