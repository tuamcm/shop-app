import sagaTestTrigger from "pages/test/testSaga";
import { all } from "redux-saga/effects";

export default function* reduxSaga() {
  yield all([sagaTestTrigger()]);
}
