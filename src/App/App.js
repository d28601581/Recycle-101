import React, { Component } from 'react';
import './App.css';
import RoutesContainer from '../components/AllPlayers/routes/RoutesContainer';
import BeforeLogin from '../components/Navbar/BeforeLogin';
import AfterLogin from'../components/Navbar/AfterLogin';

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
        <BeforeLogin/>
        <AfterLogin/>
      </div>
    );
  }
}

export default App;
