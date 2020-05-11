import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getFilms } from './actions/actions';

const mapStateToProps = state => {
  return {
    films: state.films,
    error: state.error
  }
}

const App = props => {
  return (
    <>
    <button onClick={props.getFilms}>Update Titles</button>
    {props.error.length > 0 ? <p>{props.error}</p> : null}
    <div className="App">
      {props.films.map(film => <p key={film.id}>{film.title}</p>)}
    </div>
    </>
  );
}

export default connect(mapStateToProps, {getFilms})(App);
