import React, {useState} from 'react';
import Song from './Components/Song';
import Player from './Components/Player';
import Library from './Components/Library';
import LibrarySongs from './Components/LibrarySongs';
import './styles/_app.scss';
import data from './util'

function App() {
//STATE
const [songs, setSong]  = useState(data());
const [currentSong, setCurrentSong] = useState(songs[8])
const [isPlaying, setIsPlaying] = useState(false)


  return (
    <div className="App">
     <Song currentSong= {currentSong}  />
     <Player currentSong= {currentSong} isPlaying ={isPlaying} setIsPlaying={setIsPlaying}/>
     <Library songs ={songs}/>
    </div>
  );
}

export default App;
