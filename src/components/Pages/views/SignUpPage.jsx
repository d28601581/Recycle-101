import React, { Component } from 'react';
import './styles/SignUpPage.css';
import BeforeLogin from '../../Navbar/BeforeLogin';
import history from '../routes/history';


export default class SignUpPage extends Component{
    render(){
        return(
            <div>
                <BeforeLogin />
                <div className='SignUpPage'>
                    <div className='SignUp'>Sign Up: </div><br/>
                    <label className='label'>Username: </label>
                    <input className='input' id='username' type='text'/>
                    <br/>
                    <br/>
                    <label className='label'>Password: </label>
                    <input className='input' id='password' type='password'/>
                    <br/>
                    <br/>
                    <label className='label'>Email: </label>
                    <input className='input' id='email' type='email'/>
                    <br/>
                    <br/>
                    <button className='button' onClick={() => history.push('/home')}>Sign Up</button>
                </div>
            </div>
        );
    }
}