import React, { Component } from 'react';
import './styles/LoginPage.css';
import BeforeLogin from '../../Navbar/BeforeLogin';
import {Link} from 'react-router-dom';

export default class LoginPage extends Component{
    render(){
        return(
            <div>
                <BeforeLogin />
                <div className='LoginPage'>
                    <div className='Login'>Login: </div><br/>
                    <label className='label'>Username: </label>
                    <input className='input' id='username' type='text'/>
                    <br/>
                    <br/>
                    <label className='label'>Password: </label>
                    <input className='input' id='password' type='passssword'/>
                    <br/>
                    <br/>
                    <Link to = '/home'><button className='button'>Login</button></Link>
                </div>
            </div>
        );
    }
}