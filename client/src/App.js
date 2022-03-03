import logo from './logo.svg';
import './App.css';
// import playMe from './utils/playButton.js';
// var playSound = require("play-sound")

// function playMe() {
//     console.log('got milk?');
//     playSound.play('./CowDemo.mp4')
// }
import ReactAudioPlayer from 'react-audio-player';
import cowSound from './media/CowDemo.mp4';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <ReactAudioPlayer
  src={cowSound}
  autoPlay
  controls
/>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <button onClick={() => playMe() }>Test Me</button> */}
      </header>
    </div>
  );
}

export default App;
