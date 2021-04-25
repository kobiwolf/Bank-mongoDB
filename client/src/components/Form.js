import React, { useRef } from 'react';

export default function Form({ onclick }) {
  const refName = useRef();
  const refPhone = useRef();
  const refEmail = useRef();
  const refPassword = useRef();
  return (
    <form
      className="ui form"
      onSubmit={(e) => e.preventDefault()}
      style={{ maxWidth: '50%' }}
    >
      <div className="field">
        <label> Name</label>
        <input
          ref={refName}
          type="text"
          name="first-name"
          placeholder="First Name"
        />
      </div>
      <div className="field">
        <label>phone</label>
        <input
          ref={refPhone}
          type="text"
          name="last-name"
          placeholder="phone number"
        />
      </div>
      <div className="field">
        <label>e-mail</label>
        <input
          ref={refEmail}
          type="text"
          name="last-name"
          placeholder="Last Name"
        />
      </div>
      <div className="field">
        <label>password</label>
        <input
          ref={refPassword}
          type="text"
          name="last-name"
          placeholder="Last Name"
        />
      </div>
      <button
        className="ui button"
        type="submit"
        onClick={() =>
          onclick(
            refName.current.value,
            refPhone.current.value,
            refEmail.current.value,
            refPassword.current.value
          )
        }
      >
        Submit
      </button>
    </form>
  );
}
