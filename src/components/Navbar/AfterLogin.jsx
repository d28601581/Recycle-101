import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';


export default class AfterLogin extends Component{
    render(){
        return(
            <nav className='Navbar'>
                <ol>
                    <Link className = 'title' to = '/home'>Greenify</Link>
                    <Link className = 'link' to="/map">Map</Link>
                    <Link className = 'link' to="/leaderboard">Leaderboard</Link>
                    <Link className = 'link' to="/">Log Out</Link>
                </ol>  
            </nav>
            
        )

    }
}