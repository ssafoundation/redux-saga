import { combineReducers } from "redux";
import testReducer from "./test/reducer";

const rootReducers = combineReducers({
  test: testReducer,
});
export default rootReducers;
