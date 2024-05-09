import React from 'react';

export default function Card(props) {
  return (
    <div className="card">
      <img src={`${props.img}`} alt="logo" className="card--image" />
      <div className="card-stats">
        <img src="../images/stars.png" className="card--star" alt="stars" />
        <span>{props.rating}</span>
        <span className="grey">({props.reviewCount}) . </span>
        <span className="grey">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${136}</span> / person
      </p>
    </div>
  );
}
