import axios from 'axios';
import React, { useRef, useState } from 'react';
import endpoint from '../config/path';

export default function FilterDiv() {
  const [response, setResponse] = useState(null);
  const refInput = useRef(null);
  const searchUsers = async () => {
    if (!refInput.current.value)
      return setResponse('must put a value in the filter');
    try {
      const { data } = await axios.get(
        `${endpoint}/filter/?amount=${refInput.current.value}`
      );
      setResponse(JSON.stringify(data));
    } catch (e) {
      setResponse(e.response.data);
    }
  };
  return (
    <div>
      <input ref={refInput} type="text" placeholder="amount to filter by" />
      <button onClick={() => searchUsers()}>filter</button>
      {response && <div>{response}</div>}
    </div>
  );
}
