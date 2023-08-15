import React from 'react';

export default function ActorCard({ actorName }) {
    const randomImageId = Math.floor(Math.random() * 1000);
  const imageUrl = `https://picsum.photos/200/300?random=${randomImageId}`;

  return (
    <div className="actor-card">
      <div className="actor-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="actor-name">{actorName}</div>
    </div>
  );
}