import React, {useState, useRef} from 'react';
import Song from './Components/Song';
import Player from './Components/Player';
import Library from './Components/Library';
import './styles/_app.scss';
import data from './util'
import Nav from './Components/Nav';

function App() {
//STATE
const [songs, setSong]  = useState(data());
const [currentSong, setCurrentSong] = useState(songs[2])
const [isPlaying, setIsPlaying] = useState(false)
const [libraryStatus, setLibraryStatus] = useState(false)

const [songInfo, setSongInfo] =useState({
  currentTime : 0,
  duration : 0,
})

//REFERENCE 
const audioReference = useRef(null);

 //function to update the current time and duration of the song
 const timeUpdateHandler = (e) => {
  const currentTime = e.target.currentTime;
  const duration = e.target.duration;
  setSongInfo({currentTime : currentTime, duration : duration});

 }


  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
     <Song currentSong= {currentSong}  />

     <Player currentSong= {currentSong} isPlaying ={isPlaying} 
     setIsPlaying={setIsPlaying} 
     audioReference={audioReference} 
     songInfo={songInfo} setSongInfo={setSongInfo} 
     songs={songs} setCurrentSong={setCurrentSong}/>
     

     <Library songs ={songs} setCurrentSong={setCurrentSong}audioReference={audioReference} setSong={setSong}
     libraryStatus={libraryStatus}/>


     <audio  onTimeUpdate ={timeUpdateHandler}  onLoadedMetadata={timeUpdateHandler} src ={currentSong.audio} ref={audioReference}></audio>

    </div>
  );
}

export default App;
