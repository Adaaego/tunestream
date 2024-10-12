import React, {useState} from 'react';
import Song from './Components/Song';
import Player from './Components/Player';
import './styles/_app.scss';
import data from './util'

function App() {
//STATE
const [song, setSong]  = useState(data());
const [currentSong, setCurrentSong] = useState(song[7])
const [isPlaying, setIsPlaying] = useState(false)


  return (
    <div className="App">
     <Song currentSong= {currentSong}  />
     <Player currentSong= {currentSong} isPlaying ={isPlaying} setIsPlaying={setIsPlaying}/>
    </div>
  );
}

export default App;
