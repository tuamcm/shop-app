import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/reduxStore";

enum ProcessStatus {
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}

export interface TestState {
  value: number;
  loading: ProcessStatus | null;
  error: string | null;
  data: null | string[];
  searchText: null | string;
}

const initialState: TestState = {
  value: 0,
  loading: null,
  error: null,
  data: null,
  searchText: null,
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    // test async
    TestTrigger: (state, action: PayloadAction<string>) => {
      state.loading = ProcessStatus.LOADING;
      state.searchText = action.payload;
    },
    TestSuccess: (state, action: PayloadAction<null | string[]>) => {
      state.loading = ProcessStatus.SUCCESS;
      state.data = action.payload;
    },
    TestError: (state, action: PayloadAction<null | string>) => {
      state.loading = ProcessStatus.ERROR;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  TestTrigger,
  TestSuccess,
  TestError,
} = testSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state: RootState) => state.testReducer.value;
export const testState = (state: RootState) => state.testReducer;

export default testSlice.reducer;
