import React from 'react';
import cowDemo from '../../media/CowDemo.mp4';
import chickenDemo from '../../media/ChickenDemo.mp4';
import sheepDemo from '../../media/SheepDemo.mp4';

import { useMutation } from '@apollo/client';
import { ADD_ANIMAL } from '../../utils/mutations';

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

  const [addAnimal, { error }] = useMutation(ADD_ANIMAL);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const id = document.getElementById('id');

    // On form submit, perform mutation and pass in form data object as arguments
    // It is important that the object fields are match the defined parameters in `ADD_THOUGHT` mutation
    try {
      const { data } = addAnimal({
        variables: { songStringId: id.value },
      });
    } catch (err) {
      console.error(err);
    }
  };

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
    <div>
      {songStrings &&
        songStrings.map((songString) => (
          <div className="card" style={cardDiv} value={songString._id} key={songString._id} id="id">
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
              <button type="button" className="btn btn-primary" style={buttonSpace} onClick={handleFormSubmit}>Add to Song</button>
              <audio src={cowDemo} id="cowSound"> Your browser does not support the <code>audio</code> element.</audio>
              <audio src={chickenDemo} id="chickenSound"> Your browser does not support the <code>audio</code> element.</audio>
              <audio src={sheepDemo} id="sheepSound"> Your browser does not support the <code>audio</code> element.</audio>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AnimalList;