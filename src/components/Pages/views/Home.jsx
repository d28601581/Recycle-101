import React from 'react';
import './styles/Home.css';
import AfterLogin from '../../Navbar/AfterLogin';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { getItemsThunk} from '../../../redux/getItems/getItems.action';
import { userLogInThunk} from '../../../redux/newUser/newUser.action';

class Home extends React.Component {


  componentDidMount(){
    this.props.getItemsThunk(this.props.loggedIn)
  }


  render(){
    const items = this.props.items;
    console.log(items)
    let total = 0;
    let itemTotal = 0;
    for(let i = 0; i < items.length; i++){
      total = total + items[i].points;
      itemTotal = itemTotal + items[i].quantity;
    }

    console.log('Points: ', total)
    return <div>
    <AfterLogin />
    <div className = "recycled">
    <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Welcome, {this.props.loggedIn}</h1>
      <h3>You have {total} Green points</h3>
      <p>Recycle more to earn more points</p>
      You have recycled {itemTotal} items so far <p></p>
      <br></br>
      <br></br>
      <p>Thanks {this.props.loggedIn} for caring for the planet</p>
      {/* 200 PLASTIC BOTTLES <br></br>
      35 PLASTIC CONTAINERS <br></br>
      300 PLASTIC BAGS <br></br>
      200 PAPER BAGS <br></br> */}

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Ready to recycle?</h1>
      <Link to = '/recycle'><button className = 'hmbutton'>
      Recycle
    </button></Link>
    </div>
    
    </div>
  } 
}



const mapStateToProps = (state) => ({
  loggedIn: state.newUserReducer.loggedInUser,
  items: state.getItemsReducer.items
});

export default connect(
  mapStateToProps,
  {userLogInThunk,getItemsThunk}
)(Home);