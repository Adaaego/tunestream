import React from 'react';
import LibrarySongs from './LibrarySongs'

const Library = ({songs, setCurrentSong, audioReference, setSong, libraryStatus}) => {

    return(
        <div className={`library ${libraryStatus?  'active-library' : ''}`}>
            <h2>Library</h2>
            <div className='song-info'>
                {songs.map (song => <LibrarySongs song ={song}  
                songs={songs} 
                setCurrentSong={setCurrentSong}
                key ={song.id}
                audioReference={audioReference} 
                setSong={setSong} 
                id ={song.id}/> )}
            </div>
        </div>
    )
}


export default Library;