import React, { Component } from 'react';
import './App.css';
import RoutesContainer from '../components/AllPlayers/routes/RoutesContainer';
import RecycleFunction from '../components/AllPlayers/views/RecycleFunction';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <RoutesContainer />
          <RecycleFunction></RecycleFunction>
        </header>
      </div>
    );
  }
}

export default App;
