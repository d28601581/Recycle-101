import React, { Component } from 'react';
import './styles/LoginPage.css';
import { connect } from 'react-redux';
import BeforeLogin from '../../Navbar/BeforeLogin';
import {Link} from 'react-router-dom';

import { addNewUserThunk } from '../../../redux/newUser/newUser.action';

class SignUpPage extends Component{
    constructor(props){
        super(props)
        this.state={
            userName: '',
            email: '',
            password: ''
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleUserChange = this.handleUserChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.props.addNewUserThunk();
    }


    handleUserChange(e){
        this.setState({
            userName: e.target.value
        })
    }

    handleEmailChange(e){
        this.setState({
            email: e.target.value
        })
    }
    handlePasswordChange(e){
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();

        const user = {
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password
        }

        console.log(user)

        this.props.addNewUserThunk(user)

    }



    render(){
        const validateUser = this.state.userName === this.props.user;
        return(
            <div>
                <BeforeLogin />

                <form onSubmit={this.handleSubmit} className='loginForm'>
                    
                    <label className='label'>Enter Username: </label>
                    <br/>
                    <input className='input' id='username' type='text' onChange={this.handleUserChange}/>
                    <br/>
                    <br/>
                    <label className='label'>Email: </label>
                    <br/>
                    <input className='input' id='email' type='email' onChange={this.handleEmailChange}/>
                    <br/>
                    <br/>
                    <label className='label'>Password: </label>
                    <br/>
                    <input className='input' id='password' type='password' onChange={this.handlePasswordChange}/>
                    <br/>
                    <br/>
                    {
                         validateUser?(
                            <p>{this.props.user} has been registered successfully. Log in to use the app</p>
                         ) : (
                            <p>{(this.props.user).toLowerCase()}</p>
                         )

                    }
                    <input type='submit' value='Sign Up' className='lgbutton'></input>
                    
                    

                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.newUserReducer.newUserData,
});


export default connect(
    mapStateToProps,
    {addNewUserThunk}
  )(SignUpPage);