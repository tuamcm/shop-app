import React, { useState } from "react";
import TestComponent from "components/TestComponent";
import "pages/test/testStyle.scss";
import { useReduxDispatch, useReduxSelector } from "app/reduxHook";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
  testState,
  TestState,
  TestTrigger,
} from "./testSlice";

const TestPage = () => {
  const count = useReduxSelector(selectCount);
  const dispatch = useReduxDispatch();
  const [incrementAmount, setIncrementAmount] = useState<number>(2);
  const [text, setText] = useState<string>("");

  const { data }: TestState = useReduxSelector<TestState>(testState);

  const handleOnPress = (): void => {
    console.log(text);
    dispatch(TestTrigger(text));
    setText("");
  };

  return (
    <div className="my-test">
      <p>TestPage</p>
      <p>{process.env.REACT_APP_NOT_SECRET_CODE}</p>
      <p>{process.env.REACT_APP_OTHER_CODE}</p>
      <TestComponent />

      <div>
        <div className="row">
          <button
            type="button"
            className="button"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <span className="value">{count}</span>
          <button
            type="button"
            className="button"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
        </div>
        <div className="row">
          <input
            className="textbox"
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(Number(e.target.value))}
          />
          <button
            type="button"
            className="button"
            onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
          >
            Add Amount
          </button>
          <button
            type="button"
            className="asyncButton"
            onClick={() => {
              setTimeout(() => {
                dispatch(incrementByAmount(incrementAmount));
              }, 1000);
            }}
          >
            Add Async
          </button>
        </div>
      </div>

      <div className="row">
        <input
          className="textbox"
          style={{ width: 400 }}
          value={text}
          onChange={(e) => setText(String(e.target.value))}
        />
        <button type="button" className="button" onClick={handleOnPress}>
          Search Text
        </button>
      </div>

      <ul>
        {data?.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default TestPage;
