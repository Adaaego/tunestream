import React from 'react';
import LibrarySongs from './LibrarySongs'

const Library = ({songs, setCurrentSong, audioReference}) => {
    return(
        <div className='library'>
            <h2>Library</h2>
            <div className='song-info'>
                {songs.map (song => <LibrarySongs song ={song}  
                songs={songs} setCurrentSong={setCurrentSong}
                key ={song.id} audioReference={audioReference} /> )}
            </div>
        </div>
    )
}


export default Library;