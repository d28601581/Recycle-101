import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import RoutesContainer from '../components/AllPlayers/routes/RoutesContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <RoutesContainer />
        </header>
=======
import RoutesContainer from '../components/Pages/routes/RoutesContainer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      items: []
    }
  }

  render() {
    return (
      <div className='app'>
        <RoutesContainer />
>>>>>>> fff8f7ee074f8573a0bd46f3574967d2f9653852
      </div>
    );
  }
}

export default App;
