import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';


export default class AfterLogin extends Component{
    render(){
        return(
            <nav className='Navbar'>
                <ol>
                
                    <div className = 'title'>Recycle 101</div>
                    <Link className = 'link' to="/map">MAP</Link>
                    <Link className = 'link' to="/leaderboard">LEADERBOARD</Link>
                    <Link className = 'link' to="/">SIGNOUT</Link>
                </ol>  
            </nav>
            
        )

    }
}