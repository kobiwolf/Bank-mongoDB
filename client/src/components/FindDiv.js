import React, { useState, useRef } from 'react';
import axios from 'axios';
import endpoint from '../config/path';
import Card from './Card';
export default function FindDiv() {
  const [response, setResponse] = useState(null);
  const ref1 = useRef();
  const headers = {
    headers: { auth: 'token' },
  };

  const findUser = async () => {
    try {
      let answer;
      if (!ref1.current.value) {
        answer = await axios.get(`${endpoint}/`, headers);
        const filterData = answer.data.map((user) => user._doc);
        await setResponse(JSON.stringify(filterData));
      } else {
        answer = await axios.get(`${endpoint}/${ref1.current.value}`, headers);
        setResponse(answer);
      }
    } catch (e) {
      console.dir(e.response.data);
      const w = e.response.data;
      setResponse(e.message);
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
        <h2>find a user(in order to get all users,press submit)</h2>
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
