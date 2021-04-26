import React, { useState, useRef } from 'react';
import axios from 'axios';
import endpoint from '../config/path';
import Card from './Card';
export default function FindDiv() {
  const [response, setResponse] = useState(null);
  const ref1 = useRef();

  const findUser = async () => {
    try {
      const user = await axios.get(`${endpoint}/${ref1.current.value}`);
      setResponse(JSON.stringify(user.data));
    } catch (e) {
      console.log(e);
      setResponse(e.response.data);
    }
  };
  const display = () => {
    const users = JSON.parse(response);
    if (!Array.isArray(users))
      return (
        <Card
          cash={users.cash}
          credit={users.credit}
          isActive={users.isActive}
          id={users._id}
          name={users.name}
          phone={users.phone}
        />
      );
    return users.map((user, i) => {
      return (
        <Card
          key={i}
          cash={user.cash}
          credit={user.credit}
          isActive={user.isActive}
          id={user._id}
          name={user.name}
          phone={user.phone}
        />
      );
    });
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
        {response && <div>{display()}</div>}
      </>
    </div>
  );
}
