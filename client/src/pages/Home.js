import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import farmer from '../images/farmanimals.png';




export default function Cards() {
    

    return (
        <div className="HomeBackGround">
            <div className="heightening">
                <h1 className='animaltitle'>Click Us</h1>
                <Link to="/demo">
                <img className="homeIMG" src={farmer} alt={"farmer"}></img>
                </Link>
            </div>
        </div>
    )
}
