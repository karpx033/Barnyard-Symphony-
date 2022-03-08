import React from 'react';
import '../../styles/piano.css';


const Demo = () => {

    return (
        <div id="keyboard" className="keyboard-holder" style={{width: "840px"}}>

            <div className="white key" id="KEY_C,-1" style={{width: '40px', height: '200px', left: '0px'}}>
                <div className="label">
                    <b>Q</b>
                    <br></br>
                        <br></br>
                            C
                            <span name="OCTAVE_LABEL" value="-1">3</span>
                        </div>
                </div>
                <div className="black key" id="KEY_C#,-1" style={{width: '30px', height: '120px', left: '25px'}}>
                    <div className="label">
                        <b>2</b>
                        <br></br>
                            <br></br>
                                C
                                <span name="OCTAVE_LABEL" value="-1">3</span>
                                #
                            </div>
                    </div>
                    <div className="white key" id="KEY_D,-1" style={{width: '40px', height: '200px', left: '40px'}}>
                        <div className="label">
                            <b>W</b>
                            <br></br>
                                <br></br>
                                    D
                                    <span name="OCTAVE_LABEL" value="-1">3</span>
                                </div>
                        </div>
                        <div className="black key" id="KEY_D#,-1" style={{width: '30px', height: '120px', left: '65px'}}>
                            <div className="label">
                                <b>3</b>
                                <br></br>
                                    <br></br>
                                        D
                                        <span name="OCTAVE_LABEL" value="-1">3</span>
                                        #
                                    </div>
                            </div>
                            <div className="white key" id="KEY_E,-1" style={{width: '40px', height: '200px', left: '80px'}}>
                                <div className="label">
                                    <b>E</b>
                                    <br></br>
                                        <br></br>
                                            E
                                            <span name="OCTAVE_LABEL" value="-1">3</span>
                                        </div>
                                </div>
                                <div className="white key" id="KEY_F,-1" style={{width: '40px', height: '200px', left: '120px'}}>
                                    <div className="label">
                                        <b>R</b>
                                        <br></br>
                                            <br></br>
                                                F
                                                <span name="OCTAVE_LABEL" value="-1">3</span>
                                            </div>
                                    </div>
                                    <div className="black key" id="KEY_F#,-1" style={{width: '30px', height: '120px', left: '145px'}}>
                                        <div className="label">
                                            <b>5</b>
                                            <br></br>
                                                <br></br>
                                                    F
                                                    <span name="OCTAVE_LABEL" value="-1">3</span>
                                                    #
                                                </div>
                                        </div>
                                        <div className="white key" id="KEY_G,-1" style={{width: '40px', height: '200px', left: '160px'}}>
                                            <div className="label">
                                                <b>T</b>
                                                <br></br>
                                                    <br></br>
                                                        G
                                                        <span name="OCTAVE_LABEL" value="-1">3</span>
                                                    </div>
                                            </div>
                                            <div className="black key" id="KEY_G#,-1" style={{width: '30px', height: '120px', left: '185px'}}>
                                                <div className="label">
                                                    <b>6</b>
                                                    <br></br>
                                                        <br></br>
                                                            G
                                                            <span name="OCTAVE_LABEL" value="-1">3</span>
                                                            #
                                                        </div>
                                                </div>
                                                <div className="white key" id="KEY_A,-1" style={{width: '40px', height: '200px', left: '200px'}}>
                                                    <div className="label">
                                                        <b>Y</b>
                                                        <br></br>
                                                            <br></br>
                                                                A
                                                                <span name="OCTAVE_LABEL" value="-1">3</span>
                                                            </div>
                                                    </div>
                                                    <div className="black key" id="KEY_A#,-1" style={{width: '30px', height: '120px', left: '225px'}}>
                                                        <div className="label">
                                                            <b>7</b>
                                                            <br></br>
                                                                <br></br>
                                                                    A
                                                                    <span name="OCTAVE_LABEL" value="-1">3</span>
                                                                    #
                                                                </div>
                                                        </div>
                                                        <div className="white key" id="KEY_B,-1" style={{width: '40px', height: '200px', left: '240px'}}>
                                                            <div className="label">
                                                                <b>U</b>
                                                                <br></br>
                                                                    <br></br>
                                                                        B
                                                                        <span name="OCTAVE_LABEL" value="-1">3</span>
                                                                    </div>
                                                            </div>
                                                            <div className="white key" id="KEY_C,0" style={{width: '40px', height: '200px', left: '280px'}}>
                                                                <div className="label">
                                                                    <b>I</b>
                                                                    <br></br>
                                                                        <br></br>
                                                                            C
                                                                            <span name="OCTAVE_LABEL" value="0">4</span>
                                                                        </div>
                                                                </div>
                                                                <div className="black key" id="KEY_C#,0" style={{width: '30px', height: '120px', left: '305px'}}>
                                                                    <div className="label">
                                                                        <b>9</b>
                                                                        <br></br>
                                                                            <br></br>
                                                                                C
                                                                                <span name="OCTAVE_LABEL" value="0">4</span>
                                                                                #
                                                                            </div>
                                                                    </div>
                                                                    <div className="white key" id="KEY_D,0" style={{width: '40px', height: '200px', left: '320px'}}>
                                                                        <div className="label">
                                                                            <b>O</b>
                                                                            <br></br>
                                                                                <br></br>
                                                                                    D
                                                                                    <span name="OCTAVE_LABEL" value="0">4</span>
                                                                                </div>
                                                                        </div>
                                                                        <div className="black key" id="KEY_D#,0" style={{width: '30px', height: '120px', left: '345px'}}>
                                                                            <div className="label">
                                                                                <b>0</b>
                                                                                <br></br>
                                                                                    <br></br>
                                                                                        D
                                                                                        <span name="OCTAVE_LABEL" value="0">4</span>
                                                                                        #
                                                                                    </div>
                                                                            </div>
                                                                            <div className="white key" id="KEY_E,0" style={{width: '40px', height: '200px', left: '360px'}}>
                                                                                <div className="label">
                                                                                    <b>P</b>
                                                                                    <br></br>
                                                                                        <br></br>
                                                                                            E
                                                                                            <span name="OCTAVE_LABEL" value="0">4</span>
                                                                                        </div>
                                                                                </div>
                                                                                <div className="white key" id="KEY_F,0" style={{width: '40px', height: '200px', left: '400px'}}>
                                                                                    <div className="label">
                                                                                        <b>[</b>
                                                                                        <br></br>
                                                                                            <br></br>
                                                                                                F
                                                                                                <span name="OCTAVE_LABEL" value="0">4</span>
                                                                                            </div>
                                                                                    </div>
                                                                                    <div className="black key" id="KEY_F#,0" style={{width: '30px', height: '120px', left: '425px'}}>
                                                                                        <div className="label">
                                                                                            <b>=</b>
                                                                                            <br></br>
                                                                                                <br></br>
                                                                                                    F
                                                                                                    <span name="OCTAVE_LABEL" value="0">4</span>
                                                                                                    #
                                                                                                </div>
                                                                                        </div>
                                                                                        <div className="white key" id="KEY_G,0" style={{width: '40px', height: '200px', left: '440px'}}>
                                                                                            <div className="label">
                                                                                                <b>]</b>
                                                                                                <br></br>
                                                                                                    <br></br>
                                                                                                        G
                                                                                                        <span name="OCTAVE_LABEL" value="0">4</span>
                                                                                                    </div>
                                                                                            </div>
                                                                                            <div className="black key" id="KEY_G#,0" style={{width: '30px', height: '120px', left: '465px'}}>
                                                                                                <div className="label">
                                                                                                    <b>A</b>
                                                                                                    <br></br>
                                                                                                        <br></br>
                                                                                                            G
                                                                                                            <span name="OCTAVE_LABEL" value="0">4</span>
                                                                                                            #
                                                                                                        </div>
                                                                                                </div>
                                                                                                <div className="white key" id="KEY_A,0" style={{width: '40px', height: '200px', left: '480px'}}>
                                                                                                    <div className="label">
                                                                                                        <b>Z</b>
                                                                                                        <br></br>
                                                                                                            <br></br>
                                                                                                                A
                                                                                                                <span name="OCTAVE_LABEL" value="0">4</span>
                                                                                                            </div>
                                                                                                    </div>
                                                                                                    <div className="black key" id="KEY_A#,0" style={{width: '30px', height: '120px', left: '505px'}}>
                                                                                                        <div className="label">
                                                                                                            <b>S</b>
                                                                                                            <br></br>
                                                                                                                <br></br>
                                                                                                                    A
                                                                                                                    <span name="OCTAVE_LABEL" value="0">4</span>#</div>
                                                                                                        </div>
                                                                                                        <div className="white key" id="KEY_B,0" style={{width: '40px', height: '200px', left: '520px'}}>
                                                                                                            <div className="label">
                                                                                                                <b>X</b>
                                                                                                                <br></br>
                                                                                                                    <br></br>
                                                                                                                        B
                                                                                                                        <span name="OCTAVE_LABEL" value="0">4</span>
                                                                                                                    </div>
                                                                                                            </div>
                                                                                                            <div className="white key" id="KEY_C,1" style={{width: '40px', height: '200px', left: '560px'}}>
                                                                                                                <div className="label">
                                                                                                                    <b>C</b>
                                                                                                                    <br></br>
                                                                                                                        <br></br>
                                                                                                                            C
                                                                                                                            <span name="OCTAVE_LABEL" value="1">5</span>
                                                                                                                        </div>
                                                                                                                </div>
                                                                                                                <div className="black key" id="KEY_C#,1" style={{width: '30px', height: '120px', left: '585px'}}>
                                                                                                                    <div className="label">
                                                                                                                        <b>F</b>
                                                                                                                        <br></br>
                                                                                                                            <br></br>
                                                                                                                                C
                                                                                                                                <span name="OCTAVE_LABEL" value="1">5</span>
                                                                                                                                #
                                                                                                                            </div>
                                                                                                                    </div>
                                                                                                                    <div className="white key" id="KEY_D,1" style={{width: '40px', height: '200px', left: '600px'}}>
                                                                                                                        <div className="label">
                                                                                                                            <b>V</b>
                                                                                                                            <br></br>
                                                                                                                                <br></br>
                                                                                                                                    D
                                                                                                                                    <span name="OCTAVE_LABEL" value="1">5</span>
                                                                                                                                </div>
                                                                                                                        </div>
                                                                                                                        <div className="black key" id="KEY_D#,1" style={{width: '30px', height: '120px', left: '625px'}}>
                                                                                                                            <div className="label">
                                                                                                                                <b>G</b>
                                                                                                                                <br></br>
                                                                                                                                    <br></br>
                                                                                                                                        D
                                                                                                                                        <span name="OCTAVE_LABEL" value="1">5</span>
                                                                                                                                        #
                                                                                                                                    </div>
                                                                                                                            </div>
                                                                                                                            <div className="white key" id="KEY_E,1" style={{width: '40px', height: '200px', left: '640px'}}>
                                                                                                                                <div className="label">
                                                                                                                                    <b>B</b>
                                                                                                                                    <br></br>
                                                                                                                                        <br></br>
                                                                                                                                            E
                                                                                                                                            <span name="OCTAVE_LABEL" value="1">5</span>
                                                                                                                                        </div>
                                                                                                                                </div>
                                                                                                                                <div className="white key" id="KEY_F,1" style={{width: '40px', height: '200px', left: '680px'}}>
                                                                                                                                    <div className="label">
                                                                                                                                        <b>N</b>
                                                                                                                                        <br></br>
                                                                                                                                            <br></br>
                                                                                                                                                F
                                                                                                                                                <span name="OCTAVE_LABEL" value="1">5</span>
                                                                                                                                            </div>
                                                                                                                                    </div>
                                                                                                                                    <div className="black key" id="KEY_F#,1" style={{width: '30px', height: '120px', left: '705px'}}>
                                                                                                                                        <div className="label">
                                                                                                                                            <b>J</b>
                                                                                                                                            <br></br>
                                                                                                                                                <br></br>
                                                                                                                                                    F
                                                                                                                                                    <span name="OCTAVE_LABEL" value="1">5</span>
                                                                                                                                                    #
                                                                                                                                                </div>
                                                                                                                                        </div>
                                                                                                                                        <div className="white key" id="KEY_G,1" style={{width: '40px', height: '200px', left: '720px'}}>
                                                                                                                                            <div className="label">
                                                                                                                                                <b>M</b>
                                                                                                                                                <br></br>
                                                                                                                                                    <br></br>
                                                                                                                                                        G
                                                                                                                                                        <span name="OCTAVE_LABEL" value="1">5</span>
                                                                                                                                                    </div>
                                                                                                                                            </div>
                                                                                                                                            <div className="black key" id="KEY_G#,1" style={{width: '30px', height: '120px', left: '745px'}}>
                                                                                                                                                <div className="label">
                                                                                                                                                    <b>K</b>
                                                                                                                                                    <br></br>
                                                                                                                                                        <br></br>
                                                                                                                                                            G
                                                                                                                                                            <span name="OCTAVE_LABEL" value="1">5</span>
                                                                                                                                                            #
                                                                                                                                                        </div>
                                                                                                                                                </div>
                                                                                                                                                <div className="white key" id="KEY_A,1" style={{width: '40px', height: '200px', left: '760px'}}>
                                                                                                                                                    <div className="label">
                                                                                                                                                        <b>,</b>
                                                                                                                                                        <br></br>
                                                                                                                                                            <br></br>
                                                                                                                                                                A
                                                                                                                                                                <span name="OCTAVE_LABEL" value="1">5</span>
                                                                                                                                                            </div>
                                                                                                                                                    </div>
                                                                                                                                                    <div className="black key" id="KEY_A#,1" style={{width: '30px', height: '120px', left: '785px'}}>
                                                                                                                                                        <div className="label">
                                                                                                                                                            <b>L</b>
                                                                                                                                                            <br></br>
                                                                                                                                                                <br></br>
                                                                                                                                                                    A
                                                                                                                                                                    <span name="OCTAVE_LABEL" value="1">5</span>
                                                                                                                                                                    #
                                                                                                                                                                </div>
                                                                                                                                                        </div>
                                                                                                                                                        <div className="white key" id="KEY_B,1" style={{width: '40px', height: '200px', left: '800px'}}>
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