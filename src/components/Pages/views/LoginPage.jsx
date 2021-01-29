import React, { Component } from 'react';
import './styles/SignUpPage.css';
import { connect } from 'react-redux';
import BeforeLogin from '../../Navbar/BeforeLogin';
import {Link} from 'react-router-dom';

import { userLogInThunk } from '../../../redux/newUser/newUser.action';


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

        this.props.userLogInThunk(user)

    }
    render(){
        
        return(
            <div>
                <BeforeLogin />

                <form onSubmit={this.handleSubmit}>
                    
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

                    <p>{(this.props.user)}</p>
                    <input type='submit' value='Log In'></input>
                </form>
                {/* <div className='LoginPage'>
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
                </div> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.newUserReducer.loggedInUser,
});

export default connect(
    mapStateToProps,
    {userLogInThunk}
  )(LoginPage);