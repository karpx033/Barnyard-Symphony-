import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PROFILE } from '../utils/queries';
import Auth from '../utils/auth';

import alpacaDemo from '../media/Alpaca1.wav';
import duckDemo from '../media/Duck1.mp3';
import foxDemo from '../media/Fox1.mp3';
import goatDemo from '../media/Goat1.mp3';
import horseDemo from '../media/Horse1.mp3';
import pigDemo from '../media/PigSqueel1.mp3';
import rabbitDemo from '../media/Rabbit1.mp3';
import roosterDemo from '../media/Rooster1.mp3';
import turkeyDemo from '../media/Turkey1.mp3';
import cowDemo from '../media/CowDemo.mp4';
import chickenDemo from '../media/ChickenDemo.mp4';
import sheepDemo from '../media/SheepDemo.mp4';

var cowNoise = function () {
    var cowSounds = document.getElementById("cowSound");

    cowSounds.play();
};

var chickenNoise = function () {
    var chickenSounds = document.getElementById("chickenSound");

    chickenSounds.play();
};

var sheepNoise = function () {
    var sheepSounds = document.getElementById("sheepSound");

    sheepSounds.play();
};

var alpacaNoise = function () {
    var alpacaSounds = document.getElementById("alpacaSound");

    alpacaSounds.play();
};

var duckNoise = function () {
    var duckSounds = document.getElementById("duckSound");

    duckSounds.play();
};

var foxNoise = function () {
    var foxSounds = document.getElementById("foxSound");

    foxSounds.play();
};

var goatNoise = function () {
    var goatSounds = document.getElementById("goatSound");

    goatSounds.play();
};

var horseNoise = function () {
    var horseSounds = document.getElementById("horseSound");

    horseSounds.play();
};

var pigNoise = function () {
    var pigSounds = document.getElementById("pigSound");

    pigSounds.play();
};

var rabbitNoise = function () {
    var rabbitSounds = document.getElementById("rabbitSound");

    rabbitSounds.play();
};

var roosterNoise = function () {
    var roosterSounds = document.getElementById("roosterSound");

    roosterSounds.play();
};

var turkeyNoise = function () {
    var turkeySounds = document.getElementById("turkeySound");

    turkeySounds.play();
};

export default function Cards() {
    const cardDiv = {
        maxwidth: "50rem",
        maxheight: "30rem",
        margin: "10px",

    };

    const animalDiv = {
        maxwidth: "5rem",
    };

    const { loading, data } = useQuery(QUERY_PROFILE, {
        variables: { profileId: Auth.getProfile().data._id }
    });
    const profile = data?.profile || [];

    const buttonSpace = {
        marginLeft: "5px",
        marginRight: "5px",
      };

    return (
        <div>
            <div className="jumbotron card" style={cardDiv}>
                <h1 className="display-4">Create a Song!</h1>
                <p className="lead">Make a song from all the animal sounds you added. It can be played like a piano!</p>
                <hr className="my-4"></hr>
                <h3>Your Favorite Animals</h3>
                <div className="col-12 col-md-10 my-3">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <div>
                            {profile.songString && profile.songString.map((animal) => (
                                <div className="card" style={animalDiv} key={animal._id}>
                                    <img className="card-img-top" src={animal.img} alt={"Animal"} style={animalDiv}></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{animal.name}</h5>
                                        <p className="card-text">{animal.description}</p>
                                        {animal.name === "Cow" &&
                                            <button type="button" className="btn animalbtn btn-primary" onClick={cowNoise} style={buttonSpace}>Play Sound</button>
                                        }
                                        {animal.name === "Chicken" &&
                                            <button type="button" className="btn animalbtn btn-primary" onClick={chickenNoise} style={buttonSpace}>Play Sound</button>
                                        }
                                        {animal.name === "Sheep" &&
                                            <button type="button" className="btn animal btn btn-primary" onClick={sheepNoise} style={buttonSpace}>Play Sound</button>
                                        }
                                        {animal.name === "Alpaca" &&
                                            <button type="button" className="btn animal btn btn-primary" onClick={alpacaNoise} style={buttonSpace}>Play Sound</button>
                                        }
                                        {animal.name === "Duck" &&
                                            <button type="button" className="btn animal btn btn-primary" onClick={duckNoise} style={buttonSpace}>Play Sound</button>
                                        }
                                        {animal.name === "Fox" &&
                                            <button type="button" className="btn animal btn btn-primary" onClick={foxNoise} style={buttonSpace}>Play Sound</button>
                                        }
                                        {animal.name === "Goat" &&
                                            <button type="button" className="btn animal btn btn-primary" onClick={goatNoise} style={buttonSpace}>Play Sound</button>
                                        }
                                        {animal.name === "Horse" &&
                                            <button type="button" className="btn animal btn btn-primary" onClick={horseNoise} style={buttonSpace}>Play Sound</button>
                                        }
                                        {animal.name === "Pig" &&
                                            <button type="button" className="btn animal btn btn-primary" onClick={pigNoise} style={buttonSpace}>Play Sound</button>
                                        }
                                        {animal.name === "Rabbit" &&
                                            <button type="button" className="btn animal btn btn-primary" onClick={rabbitNoise} style={buttonSpace}>Play Sound</button>
                                        }
                                        {animal.name === "Rooster" &&
                                            <button type="button" className="btn animal btn btn-primary" onClick={roosterNoise} style={buttonSpace}>Play Sound</button>
                                        }
                                        {animal.name === "Turkey" &&
                                            <button type="button" className="btn animal btn btn-primary" onClick={turkeyNoise} style={buttonSpace}>Play Sound</button>
                                        }
                                        <audio src={cowDemo} id="cowSound"> Your browser does not support the <code>audio</code> element.</audio>
                                        <audio src={chickenDemo} id="chickenSound"> Your browser does not support the <code>audio</code> element.</audio>
                                        <audio src={sheepDemo} id="sheepSound"> Your browser does not support the <code>audio</code> element.</audio>
                                        <audio src={alpacaDemo} id="alpacaSound"> Your browser does not support the <code>audio</code> element.</audio>
                                        <audio src={duckDemo} id="duckSound"> Your browser does not support the <code>audio</code> element.</audio>
                                        <audio src={foxDemo} id="foxSound"> Your browser does not support the <code>audio</code> element.</audio>
                                        <audio src={goatDemo} id="goatSound"> Your browser does not support the <code>audio</code> element.</audio>
                                        <audio src={horseDemo} id="horseSound"> Your browser does not support the <code>audio</code> element.</audio>
                                        <audio src={pigDemo} id="pigSound"> Your browser does not support the <code>audio</code> element.</audio>
                                        <audio src={rabbitDemo} id="rabbitSound"> Your browser does not support the <code>audio</code> element.</audio>
                                        <audio src={roosterDemo} id="roosterSound"> Your browser does not support the <code>audio</code> element.</audio>
                                        <audio src={turkeyDemo} id="turkeySound"> Your browser does not support the <code>audio</code> element.</audio>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#test" role="button">Learn more</a>
                </p>
            </div>
        </div>
    )
}