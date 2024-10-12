import React, {useState} from 'react';
import Song from './Components/Song';
import Player from './Components/Player';
import './styles/_app.scss';
import data from './util'

function App() {
//STATE
const [song, setSong]  = useState(data());
const [currentSong, setCurrentSong] = useState(song[4])

  return (
    <div className="App">
     <Song />
     <Player />
    </div>
  );
}

export default App;
