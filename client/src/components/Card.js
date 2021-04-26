import React from 'react';

export default function Card({ cash, credit, isActive, id, name, phone }) {
  return (
    <div
      className="card"
      style={{
        margin: '5pm',
        border: '1px solid black',
        borderRadius: '5px',
        width: 'max-content',
      }}
    >
      <div className="content">
        <div className="header">{name}</div>
        <div className="meta">{id}</div>
        <div className="description">{phone}</div>
        <div className="description">{`cash:${cash}, credit:${credit}`}</div>
        <div className="description">{`active:${isActive}`}</div>
      </div>
    </div>
  );
}
