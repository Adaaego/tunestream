import React from 'react';
import Song from './Components/Song';
import Player from './Components/Player';
import './styles/_app.scss'

function App() {
  return (
    <div className="App">
     <Song />
     <Player />
    </div>
  );
}

export default App;
