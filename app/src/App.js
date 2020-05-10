import React from 'react';
import './App.css';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    state: state
  }
}

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default connect(mapStateToProps, {})(App);
