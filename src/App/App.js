import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
//import RoutesContainer from '../components/Pages/routes/RoutesContainer';
import BeforeLogin from '../components/Navbar/BeforeLogin';
import AfterLogin from'../components/Navbar/AfterLogin';
import SignUpPage from '../components/Pages/views/SignUpPage';
import Welcome from '../components/Pages/views/Welcome';
import LoginPage from '../components/Pages/views/LoginPage';

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
        <Router>
        <BeforeLogin/>   
        
          <Switch>
            <Route exact path="/"> <Welcome/></Route> 
            <Route path='/Login'> <LoginPage/></Route>
            <Route path='/SignUp'> <SignUpPage/></Route>
          </Switch> 
        </Router>
      </div>
    );
  }
}

export default App;
