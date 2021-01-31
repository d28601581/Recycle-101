import React from 'react';
import './styles/Home.css';
import AfterLogin from '../../Navbar/AfterLogin';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllItemsThunk} from '../../../redux/player/player.actions';
import { userLogInThunk} from '../../../redux/newUser/newUser.action';

class Home extends React.Component {


  componentDidMount(){
    this.props.fetchAllItemsThunk(this.props.loggedIn)
  }


  render(){
    return <div>
    <AfterLogin />
    <div className = "home">
      <p>{this.props.items}</p>
    </div>
    <div className = "recycled">
      YOU HAVE RECYCLED SO FAR: <p></p>
      200 PLASTIC BOTTLES <br></br>
      35 PLASTIC CONTAINERS <br></br>
      300 PLASTIC BAGS <br></br>
      200 PAPER BAGS <br></br>
    </div>
    <div className = "userData">
      USERNAME:                         PABLO <p></p>
      EARTH POINTS:                     9645         
    </div>
    <Link to = '/recycle'><button className = 'button'>
      Recycle
    </button></Link>
    </div>
  } 
}



const mapStateToProps = (state) => ({
  loggedIn: state.newUserReducer.loggedInUser,
  items: state.itemReducer.items
});

export default connect(
  mapStateToProps,
  {userLogInThunk,fetchAllItemsThunk}
)(Home);