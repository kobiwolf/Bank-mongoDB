import React, { useState, useRef } from 'react';
import axios from 'axios';
import endpoint from '../config/path';
export default function FindDiv() {
  const [response, setResponse] = useState(null);
  const ref1 = useRef();

  const findUser = async () => {
    try {
      const user = await axios.get(`${endpoint}/${ref1.current.value}`);
      console.log(user.data);
      setResponse(JSON.stringify(user.data));
    } catch (e) {
      setResponse(e.response.data);
    }
  };
  return (
    <div>
      <>
        <h2>find a user(in order to get all users,press submit</h2>
        <form
          className="ui form"
          onSubmit={(e) => e.preventDefault()}
          style={{ maxWidth: '50%' }}
        >
          <div className="field">
            <label> id</label>
            <input ref={ref1} type="text" name="id" placeholder="id" />
          </div>

          <button className="ui button" onClick={() => findUser()}>
            Submit
          </button>
        </form>
        {response && <div>{response}</div>}
      </>
    </div>
  );
}
