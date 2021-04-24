import axios from 'axios';
import { useState } from 'react';
import './App.css';
const endpoint =
  process.env.NODE_ENV === 'production'
    ? 'api/users'
    : 'http://localhost:3001/api/users';

function App() {
  const [users, setUsers] = useState(null);
  return (
    <div className="App">
      <button
        onClick={async () => {
          const users = await axios.get(endpoint);
          console.log(process.env.NODE_ENV);
          console.log(process.env.MONGO);
          console.log(users);
          setUsers(JSON.stringify(users));
        }}
      >
        click me
      </button>
      {users && <div>{users}</div>}
    </div>
  );
}

export default App;
