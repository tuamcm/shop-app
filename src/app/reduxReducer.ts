import { combineReducers } from "redux";
import testReducer from "pages/test/testSlice";

const reduxReducer = combineReducers({
  testReducer,
});

export default reduxReducer;
