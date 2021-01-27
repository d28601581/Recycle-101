import React, { Component } from 'react';
import './styles/LoginPage.css';
import BeforeLogin from '../../Navbar/BeforeLogin';

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
                    <button className='button'>Login</button>
                </div>
            </div>
        );
    }
}