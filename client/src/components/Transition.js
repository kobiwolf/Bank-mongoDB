import React, { useState, useRef } from 'react';
import axios from 'axios';

export default function Transition() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const [respone, setRespone] = useState(null);
  const endpoint =
    process.env.NODE_ENV === 'production'
      ? '/api/users'
      : 'http://localhost:3001/api/users';
  const transition = async () => {
    try {
      const response = await axios.post(
        `${endpoint}/transfer/?from=${ref1.current.value}&to=${ref2.current.value}&amount=${ref3.current.value}`
      );
      setRespone(response.data);
    } catch (e) {
      setRespone(e.response.data);
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
          <label> form id</label>
          <input ref={ref1} type="text" name="id" placeholder="id" />
        </div>
        <div className="field">
          <label>to</label>
          <input ref={ref2} type="text" name="id1" placeholder="id" />
        </div>
        <div className="field">
          <label>amount</label>
          <input ref={ref3} type="text" name="amount" placeholder="amount" />
        </div>

        <button
          className="ui button"
          type="submit"
          onClick={() =>
            transition(
              ref1.current.value,
              ref2.current.value,
              ref3.current.value
            )
          }
        >
          Submit
        </button>
      </form>
      {respone && <div>{respone}</div>}
    </div>
  );
}
