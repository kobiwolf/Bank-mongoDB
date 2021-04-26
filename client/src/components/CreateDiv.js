import React from 'react';
import Form from '../components/Form';
import axios from 'axios';
import { useState } from 'react';
import endpoint from '../config/path';

export default function CreateDiv({ setSigned, setUser }) {
  const [respone, setRespone] = useState(null);

  const createUser = async (name, phone, email, password) => {
    try {
      const respone = await axios.post(
        endpoint,
        {
          name,
          phone,
          email,
          password,
        },
        {
          headers: { auth: 'token' },
        }
      );
      setUser(respone.data);
      setRespone(respone.data);
    } catch (e) {
      console.dir(e);
      setRespone(e.response.data);
    }
  };
  return (
    <>
      <h2>create user</h2>
      <Form onclick={createUser} />
      {respone && <div>{respone}</div>}
      <button onClick={() => setSigned(true)}>all ready have account?</button>
    </>
  );
}
