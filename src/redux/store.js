import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from './combainReducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
      reducer: { rootReducer },
      middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;







