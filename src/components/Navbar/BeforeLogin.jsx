import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';


export default class BeforeLogin extends Component{
    render(){
        return(
            <nav className='Navbar'>
                <ul>
                
                    <div className = 'title'>Recycle 101</div>
                    <Link className = 'link' to="/Login">LOGIN</Link>
                    <Link className = 'link' to="/SignUp">SIGN UP</Link>
                    <Link className = 'link' to="/Map">MAP</Link>
  
                </ul>  
            </nav>
            
        )

    }
}