import { TEST } from "./actionTypes";

const initialState = {
  data: "akhtar",
};
const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      state = { data: action.payload };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};
export default testReducer;
