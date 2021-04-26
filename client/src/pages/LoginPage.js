import React, { useState } from 'react';
import CreateDiv from '../components/CreateDiv';
import LoginDiv from '../components/LoginDiv';

export default function LoginPage() {
  const [signed, setSigned] = useState(false);
  return (
    <>
      {signed ? (
        <LoginDiv setSigned={setSigned} />
      ) : (
        <CreateDiv setSigned={setSigned} />
      )}
    </>
  );
}
