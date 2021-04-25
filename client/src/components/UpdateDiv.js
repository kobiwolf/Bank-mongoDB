import React, { useState, useRef } from 'react';
import axios from 'axios';

export default function UpdateDiv({ value }) {
  const [response, setResponse] = useState(null);
  const ref1 = useRef();
  const ref2 = useRef();
  const endpoint =
    process.env.NODE_ENV === 'production'
      ? '/api/users'
      : 'http://localhost:3001/api/users';
  const updateUser = async () => {
    try {
      const user = await axios.put(
        `${endpoint}/${ref1.current.value}?${value}=${ref2.current.value}`
      );
      setResponse(user.data);
    } catch (e) {
      setResponse(e.response.data);
    }
  };
  return (
    <>
      <h2>Update {value}</h2>
      <form
        className="ui form"
        onSubmit={(e) => e.preventDefault()}
        style={{ maxWidth: '50%' }}
      >
        <div className="field">
          <label> id</label>
          <input ref={ref1} type="text" name="id" placeholder="id" />
        </div>
        <div className="field">
          <label>amount</label>
          <input ref={ref2} type="text" name="amount" placeholder="amount" />
        </div>
        <button className="ui button" onClick={() => updateUser()}>
          Submit
        </button>
      </form>
      {response && <div>{response}</div>}
    </>
  );
}
