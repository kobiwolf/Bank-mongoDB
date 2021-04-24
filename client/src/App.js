import axios from 'axios';
import { useRef, useState } from 'react';
import './App.css';
import Form from './components/Form';
const endpoint =
  process.env.NODE_ENV === 'production'
    ? '/api/users'
    : 'http://localhost:3001/api/users';

function App() {
  const [users, setUsers] = useState(null);
  const [respone, setRespone] = useState(null);
  const [respone1, setRespone1] = useState(null);
  const ref1 = useRef();
  const createUser = async (name, phone, email) => {
    console.log(name, phone, email);
    const respone = await axios.post(endpoint, { name, phone, email });
    setRespone(respone.data);
  };
  return (
    <div className="App">
      <button
        onClick={async () => {
          const users = await axios.get(endpoint);
          console.log(users.data);
          await setUsers(users.data);
        }}
      >
        get all users
      </button>
      <Form onclick={createUser} />
      {users && (
        <div className="1">
          {users.map(({ cash, credit, isActive, name, phone, email }) => {
            return (
              <>
                <h2>{name}</h2>
                <h2>{phone}</h2>
                <h2>{email}</h2>
                <h2>{(cash, credit)}</h2>
                <h2>{isActive}</h2>
              </>
            );
          })}
        </div>
      )}
      {respone && <div>{respone}</div>}
      <input ref={ref1} type="text" />
      <button
        onClick={async () => {
          const respone2 = await axios.delete(
            `${endpoint}/${ref1.current.value}`
          );
          console.log(respone2);
          await setRespone1(JSON.stringify(respone2.data));
        }}
      >
        delete user
      </button>
      {respone1 && <div>{respone1}</div>}
    </div>
  );
}

export default App;
