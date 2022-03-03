import './App.css';


import ReactAudioPlayer from 'react-audio-player';
import cowSound from './media/CowDemo.mp4';


import AppContainer from './components/AppContainer';


const App = () => <div><AppContainer />;
<ReactAudioPlayer
  src={cowSound}
  autoPlay
  controls
/>
  </div>


export default App;