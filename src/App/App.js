import React, { Component } from 'react';
import './App.css';
import RoutesContainer from '../components/AllPlayers/routes/RoutesContainer';
import BeforeLogin from '../components/Navbar/BeforeLogin';
import AfterLogin from'../components/Navbar/AfterLogin';
import SignUpPage from '../components/Pages/SignUpPage';

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
        <SignUpPage/>
      </div>
    );
  }
}

export default App;
