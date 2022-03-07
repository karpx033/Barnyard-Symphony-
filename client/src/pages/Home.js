import React from 'react';
import '../styles/home.css';
import farmer from '../images/farmanimals.png';


export default function Cards() {

    return (
        <div className="HomeBackGround">
            <div className="heightening">
                <h1>Click Us</h1>
                <img className="homeIMG" src={farmer}></img>
            </div>
        </div>
    )
}
