import { call, takeEvery } from "redux-saga/effects";
import { TEST } from "./actionTypes";
const dateData = () =>
  fetch(`https://jsonplaceholder.typicode.com/users`).then((res) => res.json());

function* myData(action) {
  try {
    const response = yield call(dateData);

    console.log(response);
  } catch (error) {
    console.log("error", error);
  }
  console.log("====>>test", action);
}
export default function* testSaga() {
  yield takeEvery(TEST, myData);
}
