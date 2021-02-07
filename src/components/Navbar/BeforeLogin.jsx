import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


export default class BeforeLogin extends Component{
    render(){
        return(
            <nav className='Navbar'>
                <ul>
                    <Link className = 'title' to = "/" >
                        
                        Greenify
                    </Link>
                    <Link className = 'link' to="/Login">Log In</Link>
                    <Link className = 'link' to="/SignUp">Sign Up</Link>
  
                </ul>  
            </nav>
        )

    }
}