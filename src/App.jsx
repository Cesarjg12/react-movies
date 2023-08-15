import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import MoviesListPage from './MovieListPage/MoviesListPage';
import MovieDetailPage from './MovieDetailPage/MovieDetailPage';
import NavBar from './Components/NavBar/NavBar';
import { movies } from './data';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      {user && <NavBar user={user} />}
      <Switch>
        <Route exact path="/">
          {!user ? <LoginPage setUser={setUser} /> : <MoviesListPage movies={movies} />}
        </Route>
        <Route path="/movies/:movieName">
          {user ? <MovieDetailPage movies={movies} /> : <LoginPage setUser={setUser} />}
        </Route>
      </Switch>
    </Router>
  );
}
