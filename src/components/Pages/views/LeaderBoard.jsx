import React, { Component } from 'react';
import BeforeLogin from '../../Navbar/BeforeLogin';

export default class LeaderBoard extends Component{
    constructor(){
        super();
        this.state = {
            positions: []
        }
    }

    getPosition = () => {
        //need to axios call db to get data then sort the array to find the target user 

        /*this.state.positions.map((target) => {
            if(target.userName === this.props.useName){
                return positions.indexOf(target.userName)
            }
        })*/
    }
    render(){
        return (
            <div>
                <BeforeLogin/>
                <div>Username: {this.props.userName}</div>
                <div>Total Score: {this.props.point}</div>
                <div>Your Position: {this.getPosition}</div>
                <div>GLOBAL TOP 5 RECYCLERS</div>
                <div>{positions[0].userName}</div>
                <div>{position[0].total}</div>
                <div>{positions[1].userName}</div>
                <div>{position[1].total}</div>
                <div>{positions[2].userName}</div>
                <div>{position[2].total}</div>
                <div>{positions[3].userName}</div>
                <div>{position[3].total}</div>
                <div>{positions[4].userName}</div>
                <div>{position[4].total}</div>

            </div>
        )
    }
}
