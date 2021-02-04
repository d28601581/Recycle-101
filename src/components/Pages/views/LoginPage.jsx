import React, { Component } from 'react';
import './styles/LoginPage.css';
import { connect } from 'react-redux';
import BeforeLogin from '../../Navbar/BeforeLogin';
import {Link} from 'react-router-dom';
import RoutesView from '../routes/RoutesView'

import { userLogInThunk} from '../../../redux/newUser/newUser.action';


class LoginPage extends Component{

    constructor(props){
        super(props)
        this.state={
            userName: '',
            email: '',
            password: ''
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.props.userLogInThunk();
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
            email: this.state.email,
            password: this.state.password
        }

        console.log(user)

        

        this.props.userLogInThunk(user).then((user) => {
            if (this.props.isLoggedIn) 
            this.props.history.push("/home");
        })

        
    }
    render(){

        console.log(this.props.isLoggedIn);
        
        return(
            <div className='login'>
                <BeforeLogin />

                <div className='logindiv'>
                <form onSubmit={this.handleSubmit} className='loginForm'>
                    
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

                    <p className='error'>{(this.props.error)}</p>
                    <input className='lgbutton'type='submit' value='Log In'></input>
                </form>

                </div>

                
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    error: state.newUserReducer.loginError,
    loggedIn: state.newUserReducer.loggedInUser,
    isLoggedIn: state.newUserReducer.isLoggedIn
});

export default connect(
    mapStateToProps,
    {userLogInThunk}
  )(LoginPage);