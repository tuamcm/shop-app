import { put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { TestTrigger, TestSuccess, TestError } from "pages/test/testSlice";

function* onTriggerTest(action: PayloadAction<string>) {
  try {
    const { data } = yield axios.get("https://registry.npmjs.org/-/v1/search", {
      params: {
        text: action.payload,
      },
    });
    const names: string[] = data.objects.map((result: any) => {
      return result.package.name;
    });
    yield put(TestSuccess(names));
  } catch (e: any) {
    yield put(TestError(e.message));
  }
}

export default function* sagaTestTrigger() {
  yield takeLatest(TestTrigger.type, onTriggerTest);
}
