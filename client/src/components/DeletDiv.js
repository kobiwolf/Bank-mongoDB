import React from 'react';
import axios from 'axios';
import { useRef, useState } from 'react';
import endpoint from '../config/path';

export default function DeletDiv() {
  const [deleteRes, setDeleteRes] = useState(null);
  const refInput = useRef();
  return (
    <div>
      <h1>Delete page</h1>
      <input ref={refInput} type="text" />
      <button
        onClick={async () => {
          if (refInput.current.value.length !== 24)
            return await setDeleteRes('must put vaild id');
          try {
            const respone2 = await axios.delete(
              `${endpoint}/${refInput.current.value}`
            );
            await setDeleteRes(JSON.stringify(respone2.data));
          } catch (e) {
            console.dir(e);
            await setDeleteRes(e.response.data);
          }
        }}
      >
        delete user
      </button>
      {deleteRes && <div>{deleteRes}</div>}
    </div>
  );
}
