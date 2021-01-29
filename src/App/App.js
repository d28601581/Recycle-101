import React, { Component } from 'react';
import './App.css';
import RoutesContainer from '../components/Pages/routes/RoutesContainer';
import RecycleFunction from '../components/Pages/views/RecycleFunction';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      total: 0,
      items: []
    }
  }

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