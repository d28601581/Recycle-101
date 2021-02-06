import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Welcome, Home, Login, Signup, Recycle, Leaderboard } from '../views';
import { connect } from 'react-redux';

import { userLogInThunk } from '../../../redux/newUser/newUser.action';
import { render } from '@testing-library/react';

class RoutesView extends Component{
  render(){
    return (
      // <Switch>
      //   <Route exact path="/" component={Welcome} />
      //   <Route exact path="/home" component={Home} />
      //   <Route exact path='/login' component={Login}/>
      //   <Route exact path='/signUp' component={Signup}/>
      //   <Route exact path='/recycle' component={Recycle}/>
      //   <Route exact path='/leaderboard' component={Leaderboard}/>
      // </Switch>
  
  <Switch>
  {/* Routes placed within this section are available to all visitors */}
  <Route exact path="/" component={Welcome} />
  <Route exact path="/login" component={Login} />
  <Route exact path="/signup" component={Signup} />
  
  {this.props.isLoggedIn && (
    <Switch>
      {/* Routes placed within this section are only available after
      logging in */}
      
      <Route exact path='/leaderboard' component={Leaderboard}/>
      <Route exact path="/home" component={Home} />
      
  <Route exact path='/recycle' component={Recycle} />
      <Route exact path="/map" component={Map} />
      
    </Switch>
  )}
  
  {/* Displays our Login component as a fallback */}
  <Route component={Login} />
  </Switch>
    );

  }
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.newUserReducer.isLoggedIn,
});

export default connect(
  mapStateToProps,
  {userLogInThunk}

)(RoutesView);
