import React from 'react';
import ActorCard from '../ActorCard/ActorCard';
import { movies } from '../data';

export default function ActorListPage() {
  const uniqueActorsSet = new Set();
  movies.forEach(movie => {
    movie.cast.forEach(actor => {
      uniqueActorsSet.add(actor);
    });
  });
  const uniqueActorsArray = Array.from(uniqueActorsSet);

  return (
    <div>
      <h2>Unique Actors List</h2>
      <div className="actors-list">
        {uniqueActorsArray.map(actor => (
          <ActorCard key={actor} actorName={actor} />
        ))}
      </div>
    </div>
  );
}