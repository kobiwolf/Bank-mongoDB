import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="ui three item menu">
      <Link to="/" className="active item">
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
