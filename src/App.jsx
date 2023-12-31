import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ActorListPage from './ActorListPage/ActorListPage';
import LoginPage from './LoginPage/LoginPage';
import MoviesListPage from './MovieListPage/MoviesListPage';
import MovieDetailPage from './MovieDetailPage/MovieDetailPage';
import NavBar from './Components/NavBar/NavBar';
import { movies } from './data';

export default function App() {
  const [user, setUser] = useState(null);

  function handleSetUser(name) {
    setUser(name);
  }

  return (
    <Router>
      <main>
        <h1>React Movies</h1>
        {user && <NavBar user={user} />}
        <Routes>
          <Route path="/movies" element={<MoviesListPage movies={movies} />} />
          <Route
            path="/movies/:movieName"
            element={<MovieDetailPage movies={movies} />}
          />
          <Route path="/actors" element={<ActorListPage />} />
          <Route
            path="/"
            element={user ? <MoviesListPage movies={movies} /> : <LoginPage setUser={handleSetUser} />}
          />
        </Routes>
      </main>
    </Router>
  );
}
