import React from 'react';
import Form from '../components/Form';
import axios from 'axios';
import { useRef, useState } from 'react';
import UpdateDiv from '../components/UpdateDiv';
import Transition from '../components/Transition';

export default function ActionsPage() {
  const [respone, setRespone] = useState(null);
  const endpoint =
    process.env.NODE_ENV === 'production'
      ? '/api/users'
      : 'http://localhost:3001/api/users';
  const createUser = async (name, phone, email, password) => {
    try {
      const respone = await axios.post(endpoint, {
        name,
        phone,
        email,
        password,
      });
      setRespone(respone.data);
    } catch (e) {
      setRespone(e.response.data);
    }
  };

  return (
    <div>
      <h2>create user</h2>
      <Form onclick={createUser} />
      {respone && <div>{respone}</div>}
      <UpdateDiv value="amount" />
      <UpdateDiv value="credit" />
      <Transition />
    </div>
  );
}
