import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="ui four item menu">
      <Link to="/" className=" item">
        Home
      </Link>
      <Link to="/delete" className=" item">
        delete
      </Link>
      <Link to="/users" className="item">
        get
      </Link>
      <Link to="/actions" className="item">
        put/post
      </Link>
    </div>
  );
}
