import React from 'react';
import cowDemo from '../../media/CowDemo.mp4';
import chickenDemo from '../../media/ChickenDemo.mp4';
import sheepDemo from '../../media/SheepDemo.mp4';
import Carousel from 'react-bootstrap/Carousel';
import '../../styles/animals.css';

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

const AnimalList = ({ songStrings, title }) => {
  if (!songStrings.length) {
    return <h3>No Animals Yet</h3>;
  }
  const cardDiv = {
    width: "18rem",
    margin: "10px",
  }
  const buttonSpace = {
    marginLeft: "5px",
    marginRight: "5px",
  }

  return (
    <div className="animalsbackground heightening">
      <Carousel interval="8000000" className="caroBox" variant="dark">
        {songStrings &&
          songStrings.map((songString) => (

            <Carousel.Item>

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
                <button type="button" className="btn btn-primary" style={buttonSpace}>Add to Song</button>
              </div>
              <audio src={cowDemo} id="cowSound"> Your browser does not support the <code>audio</code> element.</audio>
              <audio src={chickenDemo} id="chickenSound"> Your browser does not support the <code>audio</code> element.</audio>
              <audio src={sheepDemo} id="sheepSound"> Your browser does not support the <code>audio</code> element.</audio>

            </Carousel.Item>
          ))}
      </Carousel>


      {/* {songStrings &&
        songStrings.map((songString) => (
          <div className="card" style={cardDiv}>
            <img className="card-img-top" src={songString.img} alt="test"></img>
            <div className="card-body">
              <h5 className="card-title">{songString.name}</h5>
              <p className="card-text">{songString.description}</p>
              {songString.name === "Cow" &&
                <button type="button" class="btn btn-primary" onClick={cowNoise} style={buttonSpace}>Play Sound</button>
              }
              {songString.name === "Chicken" &&
                <button type="button" class="btn btn-primary" onClick={chickenNoise} style={buttonSpace}>Play Sound</button>
              }
              {songString.name === "Sheep" &&
                <button type="button" class="btn btn-primary" onClick={sheepNoise} style={buttonSpace}>Play Sound</button>
              }
              <button type="button" className="btn btn-primary" style={buttonSpace}>Add to Song</button>
              <audio src={cowDemo} id="cowSound"> Your browser does not support the <code>audio</code> element.</audio>
              <audio src={chickenDemo} id="chickenSound"> Your browser does not support the <code>audio</code> element.</audio>
              <audio src={sheepDemo} id="sheepSound"> Your browser does not support the <code>audio</code> element.</audio>
            </div>
          </div>
        ))} */}
    </div>
  );
};

export default AnimalList;