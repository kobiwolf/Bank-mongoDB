import React from 'react';
import Form from '../components/Form';
import axios from 'axios';
import { useState } from 'react';
import UpdateDiv from '../components/UpdateDiv';
import Transition from '../components/Transition';
import endpoint from '../config/path';

export default function ActionsPage() {
  const [respone, setRespone] = useState(null);

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
