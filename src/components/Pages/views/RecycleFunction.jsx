import React, { Component } from 'react';
import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
import AfterLogin from '../../Navbar/AfterLogin';
import './styles/RecycleFunction.css'
import {Link} from 'react-router-dom';

import { postNewItemThunk } from '../../../redux/postItem/postItem.action';
import { userLogInThunk } from '../../../redux/newUser/newUser.action';
import { getItemsThunk} from '../../../redux/getItems/getItems.action';

class RecycleFunction extends Component {
    constructor(props){
        super(props)
        this.state = {
            itemName: 'Plastic Bottle',
            category: 'Plastic',
            quantity: 0,
            itemPoint: 0,
            points: 0,
            userId: '',
          };

        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleItemChange = this.handleItemChange.bind(this);
        //this.handlePointChange =this.handlePointChange.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCategoryChange(e){
        this.setState({
            category: e.target.value
        })

        
        
        
    }
    handleItemChange(e){
        this.setState({
            itemName: e.target.value
        })
        if(e.target.value === 'Plastic Bottle'){
            this.setState({
                itemPoint: 10
            })
        }
        if(e.target.value === 'Glass Bottle'){
            this.setState({
                itemPoint: 5
            })
        }
        if(e.target.value === 'Soda Can'){
            this.setState({
                itemPoint: 5
            })
        }
        if(e.target.value === 'Paper Bag'){
            this.setState({
                itemPoint: 7
            })
        }
        if(e.target.value === 'Plastic Shopper'){
            this.setState({
                itemPoint: 10
            })
        }
        if(e.target.value === 'Paper Box'){
            this.setState({
                itemPoint: 5
            })
        }
        if(e.target.value === 'Plastic Box'){
            this.setState({
                itemPoint: 10
            })
        }
        if(e.target.value === 'Cloth'){
            this.setState({
                itemPoint: 15
            })
        }
        if(e.target.value === 'Plastic Food Container'){
            this.setState({
                itemPoint: 10
            })
        }
        if(e.target.value === 'Paper Food Container'){
            this.setState({
                itemPoint: 5
            })
        }
        if(e.target.value === 'Electronic devices'){
            this.setState({
                itemPoint: 20
            })
        }
    }
    // handlePointChange(e){
    //     this.setState({
    //         points: e.target.value
    //     })
    // }
    handleQuantityChange(e){
        this.setState({
            quantity: e.target.value,
            points: e.target.value * this.state.itemPoint
        })
    }
    handleSubmit(e){
        e.preventDefault();

        const newitem = {
            itemName: this.state.itemName,
            category: this.state.category,
            quantity: this.state.quantity,
            points: this.state.points,
            user: this.props.loggedIn
        }

        console.log('new item', newitem)
        
        this.props.postNewItemThunk(newitem)
        this.props.getItemsThunk(this.props.loggedIn)
        this.props.history.push("/home");

    }

    render() {
        
        return (
            <div >
                <AfterLogin />
                <div className='recycle'>
                <form onSubmit={this.handleSubmit}>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                    <label className = "header">Let's Recycle and Save The Planet:</label>
                    <br></br>
                    <label className = "labelOne">What are you recycling? </label>
                    <select onChange={this.handleItemChange} className = "inputOne">
                        <option>Plastic Bottle</option>
                        <option>Glass Bottle</option>
                        <option>Soda Can</option>
                        <option>Paper Bag</option>
                        <option>Plastic Shopper</option>
                        <option>Paper Box</option>
                        <option>Plastic Box</option>
                        <option>Cloth</option>
                        <option>Plastic Food Container</option>
                        <option>Paper Food Container</option>
                        <option>Electronic devices</option>
                    </select> 
                    <br></br>
                    <br></br>
                    <br></br>
                    <label className = "labelTwo">Category: </label>
                    <select onChange={this.handleCategoryChange} className = "inputTwo">
                        <option>Plastic</option>
                        <option>Paper</option>
                        <option>Glass</option>
                        <option>Aluminum (foil, can, etc.) </option>
                        <option>Other </option>
                    </select> 
                    <br></br>
                    <br></br>
                    <br></br>
                    <label className = "labelThree">Quantity: </label>
                    <input onChange={this.handleQuantityChange} className = "inputThree"></input>
                    <br></br>
                    <br></br>
                    <br></br>
                    <label className = "labelFour">Green Points: {this.state.points}</label>
                    {/* <input onChange={this.handlePointChange} className = "points"></input> */}
                    <br></br>
                    <br></br>
                    <br></br>
                    <input type='submit' value='Complete Recycle' label='Complete Recycle' className = "button"></input>
                </form>

                </div>
                
            </div>
        )
    }
}

// PostItem.propTypes = {
//     postNewItemThunk: PropTypes.func.isRequired
//   };

const mapStateToProps = (state) => ({
    loggedIn: state.newUserReducer.loggedInUser,
  });

export default connect(
    mapStateToProps,
    {postNewItemThunk, userLogInThunk, getItemsThunk}
  )(RecycleFunction);