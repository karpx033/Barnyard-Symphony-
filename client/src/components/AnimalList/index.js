import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../styles/animals.css';
import { useMutation } from '@apollo/client';
import { ADD_ANIMAL } from '../../utils/mutations';
import Auth from '../../utils/auth';

import alpacaDemo from '../../media/Alpaca1.wav';
import duckDemo from '../../media/Duck1.mp3';
import foxDemo from '../../media/Fox1.mp3';
import goatDemo from '../../media/Goat1.mp3';
import horseDemo from '../../media/Horse1.mp3';
import pigDemo from '../../media/PigSqueel1.mp3';
import rabbitDemo from '../../media/Rabbit1.mp3';
import roosterDemo from '../../media/Rooster1.mp3';
import turkeyDemo from '../../media/Turkey1.mp3';
import cowDemo from '../../media/CowDemo.mp4';
import chickenDemo from '../../media/ChickenDemo.mp4';
import sheepDemo from '../../media/SheepDemo.mp4';


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


const AnimalList = ({ songStrings }) => {

  const [addAnimal, { error }] = useMutation(ADD_ANIMAL);


  const buttonSpace = {
    marginLeft: "5px",
    marginRight: "5px",
  };

  if (!songStrings.length) {
    return <h3>No Animals Yet</h3>
  };

  return (
    <div className="animalsbackground heightening">
      <Carousel interval="8000000" className="caroBox" variant="dark">
        {songStrings &&
          songStrings.map((songString) => (

            <Carousel.Item key={songString._id}>

              <img className="smallIMG" src={songString.img} alt="test"></img>
              <h5 className='centerTxt'>{songString.name}</h5>
              <p className='centerTxt'>{songString.description}</p>
              <div className='btnDiv'>
                {songString.name === "Cow" &&
                  <button type="button" className="btn animalbtn btn-primary" onClick={cowNoise} style={buttonSpace}>Play Sound</button>
                }
                {songString.name === "Chicken" &&
                  <button type="button" className="btn animalbtn btn-primary" onClick={chickenNoise} style={buttonSpace}>Play Sound</button>
                }
                {songString.name === "Sheep" &&
                  <button type="button" className="btn animal btn btn-primary" onClick={sheepNoise} style={buttonSpace}>Play Sound</button>
                }
                {songString.name === "Alpaca" &&
                  <button type="button" className="btn animal btn btn-primary" onClick={alpacaNoise} style={buttonSpace}>Play Sound</button>
                }
                {songString.name === "Duck" &&
                  <button type="button" className="btn animal btn btn-primary" onClick={duckNoise} style={buttonSpace}>Play Sound</button>
                }
                {songString.name === "Fox" &&
                  <button type="button" className="btn animal btn btn-primary" onClick={foxNoise} style={buttonSpace}>Play Sound</button>
                }
                {songString.name === "Goat" &&
                  <button type="button" className="btn animal btn btn-primary" onClick={goatNoise} style={buttonSpace}>Play Sound</button>
                }
                {songString.name === "Horse" &&
                  <button type="button" className="btn animal btn btn-primary" onClick={horseNoise} style={buttonSpace}>Play Sound</button>
                }
                {songString.name === "Pig" &&
                  <button type="button" className="btn animal btn btn-primary" onClick={pigNoise} style={buttonSpace}>Play Sound</button>
                }
                {songString.name === "Rabbit" &&
                  <button type="button" className="btn animal btn btn-primary" onClick={rabbitNoise} style={buttonSpace}>Play Sound</button>
                }
                {songString.name === "Rooster" &&
                  <button type="button" className="btn animal btn btn-primary" onClick={roosterNoise} style={buttonSpace}>Play Sound</button>
                }
                {songString.name === "Turkey" &&
                  <button type="button" className="btn animal btn btn-primary" onClick={turkeyNoise} style={buttonSpace}>Play Sound</button>
                }
                <button type="button" className="btn btn-primary" style={buttonSpace} onClick={() => { addAnimal( { variables : { songStringId : songString._id , id: Auth.getProfile().data._id } } ) } }>Add to Song</button>
              </div>
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

            </Carousel.Item>
          ))}
      </Carousel>

    </div>
  );
};

export default AnimalList;