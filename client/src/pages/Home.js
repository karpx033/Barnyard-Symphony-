import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import farmer from '../images/farmanimals.png';

import Auth from '../utils/auth';


export default function Cards() {
    console.log(Auth.getProfile().data._id)

    return (
        <div className="HomeBackGround">
            <div className="heightening">
                <h1>Click Us</h1>
                <Link to="/demo">
                <img className="homeIMG" src={farmer} alt={"farmer"}></img>
                </Link>
            </div>
        </div>
    )
}
