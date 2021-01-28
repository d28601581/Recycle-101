import React, { Component } from 'react';
import './styles/Recycle.css';
import AfterLogin from '../../Navbar/AfterLogin';
import history from '../routes/history';


export default class Recycle extends Component{
    render(){
        return(
            <div>
                <AfterLogin />
                <div className='recycle'>
                    <div className='header'> RECYCLE HERE: </div><br/>
                    <label className='labelOne'>What are you recycling? </label>
                    <input className='inputOne' id='what' type='text'/>
                    <br/>
                    <br/>
                    <label className='labelTwo'>Category: </label>
                    <input className='inputTwo' id='category' type='text'/>
                    <br/>
                    <br/>
                    <label className='labelThree'>Quantity: </label>
                    <input className='inputThree' id='quantity' type='text'/>
                    <br/>
                    <br/>
                    <label className='titlea'>Total Pts:</label>
                    <br/>
                    <br/>
                    <label className='points'>9905</label>
                    <br/>
                    <br/>
                    <button className='button' onClick={() => history.push('/leaderboard')}>Complete Recycle</button>
                </div>
            </div>
        );
    }
}