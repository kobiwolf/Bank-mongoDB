import React, { useRef } from 'react';

export default function Form({ onclick }) {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  return (
    <form className="ui form" onSubmit={(e) => e.preventDefault()}>
      <div className="field">
        <label> Name</label>
        <input
          ref={ref1}
          type="text"
          name="first-name"
          placeholder="First Name"
        />
      </div>
      <div className="field">
        <label>phone</label>
        <input
          ref={ref2}
          type="text"
          name="last-name"
          placeholder="Last Name"
        />
      </div>
      <div className="field">
        <label>e-mail</label>
        <input
          ref={ref3}
          type="text"
          name="last-name"
          placeholder="Last Name"
        />
      </div>
      <button
        className="ui button"
        type="submit"
        onClick={() =>
          onclick(ref1.current.value, ref2.current.value, ref3.current.value)
        }
      >
        Submit
      </button>
    </form>
  );
}
