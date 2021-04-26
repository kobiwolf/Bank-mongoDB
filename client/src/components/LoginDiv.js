import React from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { useRef, useState } from 'react';
import endpoint from '../config/path';

export default function LoginDiv({ setSigned }) {
  const [respone, setRespone] = useState(null);
  const refId = useRef();
  const refPassword = useRef();
  const loginUser = async () => {
    if (!refId.current.value) return setRespone('must put a vaild id');
    try {
      const { data } = await axios.get(`${endpoint}/${refId.current.value}`);
      if (await bcrypt.compare(refPassword.current.value, data.password))
        return setRespone('connation is made!!');
      else setRespone('unable to connect-your problam!');
    } catch (e) {
      console.dir(e);
      setRespone(e.response.data);
    }
  };
  return (
    <>
      <h2>login page</h2>
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
          <label> password</label>
          <input
            ref={refPassword}
            type="text"
            name="password"
            placeholder="password"
          />
        </div>

        <button className="ui button" onClick={() => loginUser()}>
          Submit
        </button>
      </form>
      {respone && <div>{respone}</div>}
      <button onClick={() => setSigned(false)}>new here?</button>
    </>
  );
}
