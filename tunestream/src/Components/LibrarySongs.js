import React from 'react';

const LibrarySongs =({song, setCurrentSong, audioReference, setSong, songs, id}) =>{


    const songSelectHandler = async () => {
        await setCurrentSong(song);
        audioReference.current.play();

        // Updating the state of each song directly
        const updatedSongs = songs.map((s) => ({
            ...s,
            active: s.id === song.id, // Set active true for the selected song
        }));

        setSong(updatedSongs); // Update the songs state
    };

    


   
     

    return(
        <div className={`library-songs ${song.active ? 'selected' : ''}`} onClick={songSelectHandler}>
       <img src ={song.cover} alt ={song.name}></img>
       <div className='song-description'>
       <h3>{song.name}</h3>
       <h4>{song.artist}</h4>
       </div>
       
        </div>
    )
}

export default LibrarySongs;