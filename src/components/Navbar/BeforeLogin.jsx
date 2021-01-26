import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css';


export default class BeforeLogin extends Component{
    render(){
        return(
            <nav className='Navbar'>
                <ul>
                
                    <div className = 'title'>Recycle 101</div>
                    <Link className = 'link' to="/login">LOGIN</Link>
                    <Link className = 'link' to="/signUp">SIGN UP</Link>
  
                </ul>  
            </nav>
            
        )

    }
}