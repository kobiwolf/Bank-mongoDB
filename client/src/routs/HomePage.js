import React from 'react';
import axios from 'axios';
import { useRef, useState } from 'react';

export default function HomePage() {
  const endpoint =
    process.env.NODE_ENV === 'production'
      ? '/api/users'
      : 'http://localhost:3001/api/users';
  const [respone1, setRespone1] = useState(null);
  const ref1 = useRef();
  return (
    <div>
      <h1>home page</h1>
      <input ref={ref1} type="text" />
      <button
        onClick={async () => {
          try {
            const respone2 = await axios.delete(
              `${endpoint}/${ref1.current.value}`
            );

            await setRespone1(JSON.stringify(respone2.data));
          } catch (e) {
            setRespone1(e.response.data);
          }
        }}
      >
        delete user
      </button>
      {respone1 && <div>{respone1}</div>}
    </div>
  );
}
