import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './Navbar.css';


export default class BeforeLogin extends Component{
    render(){
        return(
            <nav className='Navbar'>
                <ul>
                
                    <div className = 'title'>Recycle 101</div>
                    <Link className ='link' to="/">WELCOME</Link>
                    <Link className = 'link' to="/Login">LOGIN</Link>
                    <Link className = 'link' to="/SignUp">SIGN UP</Link>
  
                </ul>  
            </nav>
        )

    }
}