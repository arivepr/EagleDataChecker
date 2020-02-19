import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Movie from './components/Movie';
import MovieList from './components/MovieList';
import Batch from './components/Batch';
import ReportLog from './components/ReportLog';
import MainPage from './components/MainPage';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/movie-list" component={MovieList} />
        <Route path="/report" component={ReportLog} />
        <Route path="/movie" component={Movie} /> 
        <Route path="/" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
