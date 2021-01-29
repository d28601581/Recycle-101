import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import { postNewItemThunk } from '../../../redux/postItem/postItem.action';

class RecycleFunction extends Component {
    constructor(props){
        super(props)
        this.state = {
            itemName: 'Bottle',
            category: 'Plastic',
            quantity: 0,
            points: 0,
          };

        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleItemChange = this.handleItemChange.bind(this);
        this.handlePointChange =this.handlePointChange.bind(this);
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
    }
    handlePointChange(e){
        this.setState({
            points: e.target.value
        })
    }
    handleQuantityChange(e){
        this.setState({
            quantity: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();

        const newitem = {
            itemName: this.state.itemName,
            category: this.state.category,
            quantity: this.state.quantity,
            points: this.state.points
        }

        console.log(newitem)
        
        this.props.postNewItemThunk(newitem)


    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>What are you recycling? </label>
                    <select onChange={this.handleItemChange}>
                        <option>Bottle</option>
                        <option>Bag</option>
                        <option>Box</option>
                        <option>Cloth</option>
                        <option>Food Container</option>
                        <option>Electronic</option>
                    </select> 
                    <br></br>
                    <label>Category: </label>
                    <select onChange={this.handleCategoryChange}>
                        <option>Plastic</option>
                        <option>Paper</option>
                        <option>Glass</option>
                        <option>Aluminum (foil, can, etc.) </option>
                    </select> 
                    <br></br>
                    <label>Quantity: </label>
                    <input onChange={this.handleQuantityChange}></input>
                    <br></br>
                    <label>Points: </label>
                    <input onChange={this.handlePointChange}></input>
                    <br></br>

                    <input type='submit' label='Complete Recycle'></input>
                </form>
            </div>
        )
    }
}

// PostItem.propTypes = {
//     postNewItemThunk: PropTypes.func.isRequired
//   };

export default connect(
    null,
    {postNewItemThunk}
  )(RecycleFunction);