import { TEST } from "./actionTypes";

export const testData = (name) => ({
  type: TEST,
  payload: name,
});
