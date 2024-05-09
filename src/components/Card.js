import React from 'react';

export default function Card(props) {
  return (
    <div className="card">
      <img src="../images/kate.png" alt="logo" className="card--image" />
      <div className="card-stats">
        <img src="../images/stars.png" className="card--star" />
        <span>5.0</span>
        <span className="grey">(6) . </span>
        <span className="grey">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}
