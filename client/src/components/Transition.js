import React, { useState, useRef } from 'react';
import axios from 'axios';
import endpoint from '../config/path';
export default function Transition() {
  const refFrom = useRef();
  const refTo = useRef();
  const refAmount = useRef();
  const [response, setResponse] = useState(null);

  const transition = async () => {
    if (
      !refFrom.current.value ||
      !refTo.current.value ||
      !refAmount.current.value
    )
      return setResponse('You must fill all the queries');
    try {
      const response = await axios.post(
        `${endpoint}/transfer/?from=${refFrom.current.value}&to=${refTo.current.value}&amount=${refAmount.current.value}`
      );
      setResponse(response.data);
    } catch (e) {
      setResponse(e.response.data);
    }
  };
  return (
    <div>
      <h2>transition</h2>
      <form
        className="ui form"
        onSubmit={(e) => e.preventDefault()}
        style={{ maxWidth: '50%' }}
      >
        <div className="field">
          <label> from id</label>
          <input ref={refFrom} type="text" name="id" placeholder="id" />
        </div>
        <div className="field">
          <label>to</label>
          <input ref={refTo} type="text" name="id1" placeholder="id" />
        </div>
        <div className="field">
          <label>amount</label>
          <input
            ref={refAmount}
            type="text"
            name="amount"
            placeholder="amount"
          />
        </div>

        <button
          className="ui button"
          type="submit"
          onClick={() =>
            transition(
              refFrom.current.value,
              refTo.current.value,
              refAmount.current.value
            )
          }
        >
          Submit
        </button>
      </form>
      {response && <div>{response}</div>}
    </div>
  );
}
