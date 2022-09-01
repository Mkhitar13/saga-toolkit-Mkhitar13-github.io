import { all, call, put, takeEvery, select } from "redux-saga/effects";
import { getCatsSuccess } from "./slices/getPostsSlice";
import { getPostsOfcats, removeItemOfcats } from "../api/api";

function* fetchCatPostsSagaWorker() {

      const cats = yield call(getPostsOfcats);
      const entries = yield select(count => count.rootReducer.cats.countOfCats);
      const cutCatsList = cats.slice(0, entries);
      yield put(getCatsSuccess(cutCatsList));

}

export function* catSaga() {
      yield takeEvery('cats/getCatsFetch', fetchCatPostsSagaWorker)
}

// -----------------------------------------------------------------------------------

function* callOfRemoveItem() {

      const get = yield call(removeItemOfcats);
      // const response = yield get[10].id;
      console.log(get);

}

export function* removeSagaWatcher() {
      yield takeEvery('cats/removeItemInArray', callOfRemoveItem)
}

// -----------------------------------------------------------------------------------

export default function* rootSaga() {
      yield all([catSaga(), removeSagaWatcher()]);
}






















