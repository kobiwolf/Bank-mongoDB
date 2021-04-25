import React, { useState, useRef } from 'react';
import axios from 'axios';
import endpoint from '../config/path';

export default function UpdateDiv({ value }) {
  const [response, setResponse] = useState(null);
  const refId = useRef();
  const refAmount = useRef();

  const updateUser = async () => {
    if (refId.current.value.length !== 24)
      return await setResponse('must put vaild id');
    try {
      const user = await axios.put(
        `${endpoint}/${refId.current.value}?${value}=${refAmount.current.value}`
      );
      if (!user) return setResponse('can not find user');
      setResponse(user.data);
    } catch (e) {
      setResponse(e.response?.data || e.message);
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
          <input ref={refId} type="text" name="id" placeholder="id" />
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
        <button className="ui button" onClick={() => updateUser()}>
          Submit
        </button>
      </form>
      {response && <div>{response}</div>}
    </>
  );
}
