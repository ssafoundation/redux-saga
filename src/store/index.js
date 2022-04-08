import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducers from "./reducers";
import rootSaga from "./sagas";
const sagaMiddleWare = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;
const combineMiddleware = [sagaMiddleWare];
const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(...combineMiddleware))
);

sagaMiddleWare.run(rootSaga);
export default store;
