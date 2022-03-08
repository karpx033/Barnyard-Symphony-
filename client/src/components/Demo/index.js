import React from 'react';
import '../../styles/piano.css';

import C3 from '../../pianoNotes/C3ALPACA.mp3';
import CSHARP3 from '../../pianoNotes/C#3ALPACA.mp3';
import D3 from '../../pianoNotes/D3ALPACA.mp3';
import Eb3 from '../../pianoNotes/Eb3COW.mp3';
import E3 from '../../pianoNotes/E3COW.mp3';
import F3 from '../../pianoNotes/F3COW.mp3';
import FSHARP3 from '../../pianoNotes/F#3SHEEP.mp3';
import G3 from '../../pianoNotes/G3SHEEP.mp3';
import GSHARP3 from '../../pianoNotes/G#3SHEEP.mp3';
import A3 from '../../pianoNotes/A3DUCK.mp3';
import ASHARP3 from '../../pianoNotes/A#3DUCK.mp3';
import B3 from '../../pianoNotes/B3DUCK.mp3';

import C4 from '../../pianoNotes/C4FOX.mp3';
import CSHARP4 from '../../pianoNotes/C#4FOX.mp3';
import D4 from '../../pianoNotes/D4FOX.mp3';
import Eb4 from '../../pianoNotes/Eb4HORSE.mp3';
import E4 from '../../pianoNotes/E4HORSE.mp3';
import F4 from '../../pianoNotes/F4HORSE.mp3';
import FSHARP4 from '../../pianoNotes/F#4GOAT.mp3';
import G4 from '../../pianoNotes/G4GOAT.mp3';
import GSHARP4 from '../../pianoNotes/G#4GOAT.mp3';
import A4 from '../../pianoNotes/A4TURKEY.mp3';
import ASHARP4 from '../../pianoNotes/A#4TURKEY.mp3';
import B4 from '../../pianoNotes/B4TURKEY.mp3';

import C5 from '../../pianoNotes/C5PIG.mp3';
import CSHARP5 from '../../pianoNotes/C#5PIG.mp3';
import D5 from '../../pianoNotes/D5PIG.mp3';
import Eb5 from '../../pianoNotes/Eb5RABBIT.mp3';
import E5 from '../../pianoNotes/E5RABBIT.mp3'
import F5 from '../../pianoNotes/F5RABBIT.mp3';
import FSHARP5 from '../../pianoNotes/F#5CHICKEN.mp3';
import G5 from '../../pianoNotes/G5CHICKEN.mp3';
import GSHARP5 from '../../pianoNotes/G#5CHICKEN.mp3';
import A5 from '../../pianoNotes/A5ROOSTER.mp3';
import ASHARP5 from '../../pianoNotes/A#5ROOSTER.mp3';
import B5 from '../../pianoNotes/B5ROOSTER.mp3';

var playC3 = function () {
    var C3 = document.getElementById("C3");
    C3.play();
};

var playCSHARP3 = function () {
    var CSHARP3 = document.getElementById("CSHARP3");
    console.log('C#3 clicked');
    // CSHARP3.play();
    const audio = new Audio(CSHARP3)
    audio.play()
};

var playD3 = function () {
    var D3 = document.getElementById("D3");
    D3.play();
  };

  var playEb3 = function () {
    var Eb3 = document.getElementById("Eb3");
    Eb3.play();
  };

  var playE3 = function () {
    var E3 = document.getElementById("E3");
    E3.play();
  };

  var playF3 = function () {
    var F3 = document.getElementById("F3");
    F3.play();
  };

  var playFSHARP3 = function () {
    var FSHARP3 = document.getElementById("FSHARP3");
    FSHARP3.play();
  };

  var playG3 = function () {
    var G3 = document.getElementById("G3");
    G3.play();
  };

  var playGSHARP3 = function () {
    var GSHARP3 = document.getElementById("GSHARP3");
    GSHARP3.play();
  };

  var playA3 = function () {
    var A3 = document.getElementById("A3");
    A3.play();
  };

  var playASHARP3 = function () {
    var ASHARP3 = document.getElementById("ASHARP3");
    ASHARP3.play();
  };

  var playB3 = function () {
    var B3 = document.getElementById("B3");
    B3.play();
  };

  var playC4 = function () {
    var C4 = document.getElementById("C4");
    C4.play();
};

var playCSHARP4 = function () {
    var CSHARP4 = document.getElementById("CSHARP4");
    CSHARP4.play();
};

var playD4 = function () {
    var D4 = document.getElementById("D4");
    D4.play();
  };

  var playEb4 = function () {
    var Eb4 = document.getElementById("Eb4");
    Eb4.play();
  };

  var playE4 = function () {
    var E4 = document.getElementById("E4");
    E4.play();
  };

  var playF4 = function () {
    var F4 = document.getElementById("F4");
    F4.play();
  };

  var playFSHARP4 = function () {
    var FSHARP4 = document.getElementById("FSHARP4");
    FSHARP4.play();
  };

  var playG4 = function () {
    var G4 = document.getElementById("G4");
    G4.play();
  };

  var playGSHARP4 = function () {
    var GSHARP4 = document.getElementById("GSHARP4");
    GSHARP4.play();
  };

  var playA4 = function () {
    var A4 = document.getElementById("A4");
    A4.play();
  };

  var playASHARP4 = function () {
    var ASHARP4 = document.getElementById("ASHARP4");
    ASHARP4.play();
  };

  var playB4 = function () {
    var B4 = document.getElementById("B4");
    B4.play();
  };

  var playC5 = function () {
    var C5 = document.getElementById("C5");
    C5.play();
};

var playCSHARP5 = function () {
    var CSHARP5 = document.getElementById("CSHARP5");
    CSHARP5.play();
};

var playD5 = function () {
    var D5 = document.getElementById("D5");
    D5.play();
  };

  var playEb5 = function () {
    var Eb5 = document.getElementById("Eb5");
    Eb5.play();
  };

  var playE5 = function () {
    var E5 = document.getElementById("E5");
    E5.play();
  };

  var playF5 = function () {
    var F5 = document.getElementById("F5");
    F5.play();
  };

  var playFSHARP5 = function () {
    var FSHARP5 = document.getElementById("FSHARP5");
    FSHARP5.play();
  };

  var playG5 = function () {
    var G5 = document.getElementById("G5");
    G5.play();
  };

  var playGSHARP5 = function () {
    var GSHARP5 = document.getElementById("GSHARP5");
    GSHARP5.play();
  };

  var playA5 = function () {
    var A5 = document.getElementById("A5");
    A5.play();
  };

  var playASHARP5 = function () {
    var ASHARP5 = document.getElementById("ASHARP5");
    ASHARP5.play();
  };

  var playB5 = function () {
    var B5 = document.getElementById("B5");
    B5.play();
  };

const Demo = () => {

    return (
        <div id="keyboard" className="keyboard-holder" style={{ width: "840px" }}>

            <div className="white key" onClick={playC3} id="KEY_C,-1" style={{ width: '40px', height: '200px', left: '0px' }}>
                <audio src={C3} id="C3"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>Q</b>
                    <br></br>
                    <br></br>
                    C
                    <span name="OCTAVE_LABEL" value="-1">3</span>
                </div>
            </div>
            <div className="black key" onClick={playCSHARP3} id="KEY_C#,-1" style={{ width: '30px', height: '120px', left: '25px' }}>
            <audio src={CSHARP3} id="CSHARP3"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>2</b>
                    <br></br>
                    <br></br>
                    C
                    <span name="OCTAVE_LABEL" value="-1">3</span>
                    #
                </div>
            </div>
            <div className="white key" onClick={playD3} id="KEY_D,-1" style={{ width: '40px', height: '200px', left: '40px' }}>
            <audio src={D3} id="D3"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>W</b>
                    <br></br>
                    <br></br>
                    D
                    <span name="OCTAVE_LABEL" value="-1">3</span>
                </div>
            </div>
            <div className="black key" onClick={playEb3} id="KEY_D#,-1" style={{ width: '30px', height: '120px', left: '65px' }}>
            <audio src={Eb3} id="Eb3"> Your browser does not support the <code>audio</code> element.</audio> 
                <div className="label">
                    <b>3</b>
                    <br></br>
                    <br></br>
                    D
                    <span name="OCTAVE_LABEL" value="-1">3</span>
                    #
                </div>
            </div>
            <div className="white key" onCLick={playE3} id="KEY_E,-1" style={{ width: '40px', height: '200px', left: '80px' }}>
            <audio src={E3} id="E3"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>E</b>
                    <br></br>
                    <br></br>
                    E
                    <span name="OCTAVE_LABEL" value="-1">3</span>
                </div>
            </div>
            <div className="white key" onClick={playF3} id="KEY_F,-1" style={{ width: '40px', height: '200px', left: '120px' }}>
            <audio src={F3} id="F3"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>R</b>
                    <br></br>
                    <br></br>
                    F
                    <span name="OCTAVE_LABEL" value="-1">3</span>
                </div>
            </div>
            <div className="black key" onClick={playFSHARP3} id="KEY_F#,-1" style={{ width: '30px', height: '120px', left: '145px' }}>
            <audio src={FSHARP3} id="FSHARP3"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>5</b>
                    <br></br>
                    <br></br>
                    F
                    <span name="OCTAVE_LABEL" value="-1">3</span>
                    #
                </div>
            </div>
            <div className="white key" onCLick={playG3} id="KEY_G,-1" style={{ width: '40px', height: '200px', left: '160px' }}>
            <audio src={G3} id="G3"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>T</b>
                    <br></br>
                    <br></br>
                    G
                    <span name="OCTAVE_LABEL" value="-1">3</span>
                </div>
            </div>
            <div className="black key" onClick={playGSHARP3} id="KEY_G#,-1" style={{ width: '30px', height: '120px', left: '185px' }}>
            <audio src={GSHARP3} id="GSHARP3"> Your browser does not support the <code>audio</code> element.</audio> 
                <div className="label">
                    <b>6</b>
                    <br></br>
                    <br></br>
                    G
                    <span name="OCTAVE_LABEL" value="-1">3</span>
                    #
                </div>
            </div>
            <div className="white key" onClick={playA3} id="KEY_A,-1" style={{ width: '40px', height: '200px', left: '200px' }}>
            <audio src={A3} id="A3"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>Y</b>
                    <br></br>
                    <br></br>
                    A
                    <span name="OCTAVE_LABEL" value="-1">3</span>
                </div>
            </div>
            <div className="black key" onClick={playASHARP3} id="KEY_A#,-1" style={{ width: '30px', height: '120px', left: '225px' }}>
            <audio src={ASHARP3} id="ASHARP3"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>7</b>
                    <br></br>
                    <br></br>
                    A
                    <span name="OCTAVE_LABEL" value="-1">3</span>
                    #
                </div>
            </div>
            <div className="white key" onClick={playB3} id="KEY_B,-1" style={{ width: '40px', height: '200px', left: '240px' }}>
            <audio src={B3} id="B3"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>U</b>
                    <br></br>
                    <br></br>
                    B
                    <span name="OCTAVE_LABEL" value="-1">3</span>
                </div>
            </div>
            <div className="white key" onClick={playC4} id="KEY_C,0" style={{ width: '40px', height: '200px', left: '280px' }}>
            <audio src={C4} id="C4"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>I</b>
                    <br></br>
                    <br></br>
                    C
                    <span name="OCTAVE_LABEL" value="0">4</span>
                </div>
            </div>
            <div className="black key" onClick={playCSHARP4} id="KEY_C#,0" style={{ width: '30px', height: '120px', left: '305px' }}>
            <audio src={CSHARP4} id="CSHARP4"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>9</b>
                    <br></br>
                    <br></br>
                    C
                    <span name="OCTAVE_LABEL" value="0">4</span>
                    #
                </div>
            </div>
            <div className="white key" onClick={playD4} id="KEY_D,0" style={{ width: '40px', height: '200px', left: '320px' }}>
            <audio src={D4} id="D4"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>O</b>
                    <br></br>
                    <br></br>
                    D
                    <span name="OCTAVE_LABEL" value="0">4</span>
                </div>
            </div>
            <div className="black key" onClick={playEb4} id="KEY_D#,0" style={{ width: '30px', height: '120px', left: '345px' }}>
            <audio src={Eb4} id="Eb4"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>0</b>
                    <br></br>
                    <br></br>
                    D
                    <span name="OCTAVE_LABEL" value="0">4</span>
                    #
                </div>
            </div>
            <div className="white key" onClick={playE4} id="KEY_E,0" style={{ width: '40px', height: '200px', left: '360px' }}>
            <audio src={E4} id="E4"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>P</b>
                    <br></br>
                    <br></br>
                    E
                    <span name="OCTAVE_LABEL" value="0">4</span>
                </div>
            </div>
            <div className="white key" onClick={playF4} id="KEY_F,0" style={{ width: '40px', height: '200px', left: '400px' }}>
            <audio src={F4} id="F4"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>[</b>
                    <br></br>
                    <br></br>
                    F
                    <span name="OCTAVE_LABEL" value="0">4</span>
                </div>
            </div>
            <div className="black key" onClick={playFSHARP4} id="KEY_F#,0" style={{ width: '30px', height: '120px', left: '425px' }}>
            <audio src={FSHARP4} id="FSHARP4"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>=</b>
                    <br></br>
                    <br></br>
                    F
                    <span name="OCTAVE_LABEL" value="0">4</span>
                    #
                </div>
            </div>
            <div className="white key" onClick={playG4} id="KEY_G,0" style={{ width: '40px', height: '200px', left: '440px' }}>
            <audio src={G4} id="G4"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>]</b>
                    <br></br>
                    <br></br>
                    G
                    <span name="OCTAVE_LABEL" value="0">4</span>
                </div>
            </div>
            <div className="black key" onClick={playGSHARP4} id="KEY_G#,0" style={{ width: '30px', height: '120px', left: '465px' }}>
            <audio src={GSHARP4} id="GSHARP4"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>A</b>
                    <br></br>
                    <br></br>
                    G
                    <span name="OCTAVE_LABEL" value="0">4</span>
                    #
                </div>
            </div>
            <div className="white key" onClick={playA4} id="KEY_A,0" style={{ width: '40px', height: '200px', left: '480px' }}>
            <audio src={A4} id="A4"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>Z</b>
                    <br></br>
                    <br></br>
                    A
                    <span name="OCTAVE_LABEL" value="0">4</span>
                </div>
            </div>
            <div className="black key" onClick={playASHARP4} id="KEY_A#,0" style={{ width: '30px', height: '120px', left: '505px' }}>
            <audio src={ASHARP4} id="ASHARP4"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>S</b>
                    <br></br>
                    <br></br>
                    A
                    <span name="OCTAVE_LABEL" value="0">4</span>#</div>
            </div>
            <div className="white key" onClick={playB4} id="KEY_B,0" style={{ width: '40px', height: '200px', left: '520px' }}>
            <audio src={B4} id="B4"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>X</b>
                    <br></br>
                    <br></br>
                    B
                    <span name="OCTAVE_LABEL" value="0">4</span>
                </div>
            </div>
            <div className="white key" onClick={playC5} id="KEY_C,1" style={{ width: '40px', height: '200px', left: '560px' }}>
            <audio src={C5} id="C5"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>C</b>
                    <br></br>
                    <br></br>
                    C
                    <span name="OCTAVE_LABEL" value="1">5</span>
                </div>
            </div>
            <div className="black key" onClick={playCSHARP5} id="KEY_C#,1" style={{ width: '30px', height: '120px', left: '585px' }}>
            <audio src={CSHARP5} id="CSHARP5"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>F</b>
                    <br></br>
                    <br></br>
                    C
                    <span name="OCTAVE_LABEL" value="1">5</span>
                    #
                </div>
            </div>
            <div className="white key" onClick={playD5} id="KEY_D,1" style={{ width: '40px', height: '200px', left: '600px' }}>
            <audio src={D5} id="D5"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>V</b>
                    <br></br>
                    <br></br>
                    D
                    <span name="OCTAVE_LABEL" value="1">5</span>
                </div>
            </div>
            <div className="black key" onClick={playEb5} id="KEY_D#,1" style={{ width: '30px', height: '120px', left: '625px' }}>
            <audio src={Eb5} id="Eb5"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>G</b>
                    <br></br>
                    <br></br>
                    D
                    <span name="OCTAVE_LABEL" value="1">5</span>
                    #
                </div>
            </div>
            <div className="white key" onClick={playE5} id="KEY_E,1" style={{ width: '40px', height: '200px', left: '640px' }}>
            <audio src={E5} id="E5"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>B</b>
                    <br></br>
                    <br></br>
                    E
                    <span name="OCTAVE_LABEL" value="1">5</span>
                </div>
            </div>
            <div className="white key" onClick={playF5} id="KEY_F,1" style={{ width: '40px', height: '200px', left: '680px' }}>
            <audio src={F5} id="F5"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>N</b>
                    <br></br>
                    <br></br>
                    F
                    <span name="OCTAVE_LABEL" value="1">5</span>
                </div>
            </div>
            <div className="black key" onClick={playFSHARP5} id="KEY_F#,1" style={{ width: '30px', height: '120px', left: '705px' }}>
            <audio src={FSHARP5} id="FSHARP5"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>J</b>
                    <br></br>
                    <br></br>
                    F
                    <span name="OCTAVE_LABEL" value="1">5</span>
                    #
                </div>
            </div>
            <div className="white key" onClick={playG5} id="KEY_G,1" style={{ width: '40px', height: '200px', left: '720px' }}>
            <audio src={G5} id="G5"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>M</b>
                    <br></br>
                    <br></br>
                    G
                    <span name="OCTAVE_LABEL" value="1">5</span>
                </div>
            </div>
            <div className="black key" onClick={playGSHARP5} id="KEY_G#,1" style={{ width: '30px', height: '120px', left: '745px' }}>
            <audio src={GSHARP5} id="GSHARP5"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>K</b>
                    <br></br>
                    <br></br>
                    G
                    <span name="OCTAVE_LABEL" value="1">5</span>
                    #
                </div>
            </div>
            <div className="white key" onClick={playA5} id="KEY_A,1" style={{ width: '40px', height: '200px', left: '760px' }}>
            <audio src={A5} id="A5"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>,</b>
                    <br></br>
                    <br></br>
                    A
                    <span name="OCTAVE_LABEL" value="1">5</span>
                </div>
            </div>
            <div className="black key" onClick={playASHARP5} id="KEY_A#,1" style={{ width: '30px', height: '120px', left: '785px' }}>
            <audio src={ASHARP5} id="ASHARP5"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>L</b>
                    <br></br>
                    <br></br>
                    A
                    <span name="OCTAVE_LABEL" value="1">5</span>
                    #
                </div>
            </div>
            <div className="white key" onClick={playB5} id="KEY_B,1" style={{ width: '40px', height: '200px', left: '800px' }}>
            <audio src={B5} id="B5"> Your browser does not support the <code>audio</code> element.</audio>
                <div className="label">
                    <b>.</b>
                    <br></br>
                    <br></br>
                    B
                    <span name="OCTAVE_LABEL" value="1">5</span>
                </div>
            </div>
        </div>
    )
};

export default Demo;