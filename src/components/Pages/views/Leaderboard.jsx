import React from 'react';
import './styles/Leaderboard.css';
import AfterLogin from '../../Navbar/AfterLogin';
//import history from '../routes/history';

const Leaderboard = () => {

    return <div>
        <AfterLogin />
        <label className = "user">
            Username:               Pablo
        </label>
        <label className = "ttlPts">
            Points:                 9905
        </label>
        <label className = "pos">
            Your Position:             77
        </label>
        <rect className = "rectOne">
            user456231               15375 Points
        </rect>
        <rect className = "rectTwo">
            user8988                    15200 Points 
        </rect>
        <rect className = "rectThree">
            theEarthGuy               14000 Points  
        </rect>
        <rect className = "rectFour">
            saveThePlanet           13025 Points 
        </rect>
        <rect className = "rectFive">
            kitten687                     10455 Points 
        </rect>
    </div>
}

export default Leaderboard;