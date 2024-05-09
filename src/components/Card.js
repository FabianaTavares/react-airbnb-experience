import React from 'react';
import starPic from '../images/star.png';

export default function Card(props) {
  let badgeText = props.openSpots === 0 ? 'SOLD OUT' : 'ONLINE';

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`${props.coverImg}`} alt="logo" className="card--image" />
      <div className="card--stats">
        <img src={starPic} className="card--star" alt="stars" />
        <span>{props.stats.rating}</span>
        <span className="grey"> ({props.stats.reviewCount}) • </span>
        <span className="grey">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
