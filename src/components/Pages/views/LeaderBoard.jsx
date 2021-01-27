import React, { Component } from 'react';
import BeforeLogin from '../../Navbar/BeforeLogin';

export default class LeaderBoard extends Component{
    render(){
        return (
            <div>
                <BeforeLogin/>
                <div>Username: {this.props.username}</div>
                <div>Total Score: {this.props.point}</div>
                <div>Your Position: {this.props.position}</div>
                <div>GLOBAL TOP 5 RECYCLERS</div>

            </div>
        )
    }
}