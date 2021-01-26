import React, { Component } from 'react';
import './App.css';
//import RoutesContainer from '../components/Pages/routes/RoutesContainer';
import BeforeLogin from '../components/Navbar/BeforeLogin';
//import AfterLogin from'../components/Navbar/AfterLogin';
import Welcome from '../components/Pages/views/Welcome';

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
 {/*       <AfterLogin/> */}
        <Welcome />
      </div>
    );
  }
}

export default App;
