import React from 'react';
import axios from 'axios';
import { useRef, useState } from 'react';
import FindDiv from '../components/FindDiv';

export default function UsersPage() {
  const [users, setUsers] = useState(null);
  const endpoint =
    process.env.NODE_ENV === 'production'
      ? '/api/users'
      : 'http://localhost:3001/api/users';
  return (
    <div>
      <h1>Users page</h1>
      <button
        onClick={async () => {
          const users = await axios.get(endpoint);
          console.log(users);
          await setUsers(users.data);
        }}
      >
        get all users
      </button>
      {users && (
        <div className="1">
          {users.map(
            ({ cash, credit, isActive, name, phone, email, _id }, index) => {
              return (
                <React.Fragment key={index}>
                  <h2>{_id}</h2>
                  <h2>{name}</h2>
                  <h2>{phone}</h2>
                  <h2>{email}</h2>
                  <h2>{` credit:${credit}`}</h2>
                  <h2>{`cash:${cash}`}</h2>
                  <h2>{isActive}</h2>
                </React.Fragment>
              );
            }
          )}
        </div>
      )}
      <FindDiv />
    </div>
  );
}
