import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';


export default class AfterLogin extends Component{
    render(){
        return(
            <nav className='Navbar'>
                <ol>
                
                    <div className = 'title'>Recycle 101</div>
                    <Link className = 'link' to="/LeaderBoard">LEADERBOARD</Link>
                    <Link className = 'link' to="/Map">MAP</Link>
                    <Link className = 'link' to="/Map">SIGNOUT</Link>
                </ol>  
            </nav>
            
        )

    }
}