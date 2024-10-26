import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Player = ({currentSong, isPlaying, setIsPlaying,audioReference, songInfo, setSongInfo, songs, setCurrentSong}) => {

  
    
    //EVENTS
    const playHandler = () => {
        if(isPlaying){
            audioReference.current.pause(); 
        }
        else{
            audioReference.current.play();
        }

        {
            setIsPlaying(!isPlaying) 
        }

       
    }

    //Event Handlers 
    const dragHandler = (e) => {
        audioReference.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime : e.target.value})
    }

    const skipHandler = (direction) =>{
     //finding the index of the current song
     const  currentIndex = songs.findIndex(song => song.id === currentSong.id)
      
     if(direction === 'skip-forward'){
        setCurrentSong(songs[(currentIndex + 1) % songs.length])
     } if(direction === 'skip-backward'){
        if((currentIndex - 1) % songs.length === - 1){
            setCurrentSong(songs[songs.length - 1]);
            return;

        }
     }{
        setCurrentSong(songs[(currentIndex + 1) % songs.length])
     }
    }



     //function to update time 
   const getTime = (time) => {
    return (
        Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    )
   }

    
return(


<div className='player' >

<div className=' time-control'>
<p>{getTime(songInfo.currentTime)}</p>
<input type='range' min ={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler}></input>
<p>{getTime(songInfo.duration)}</p>
</div>

<div className='play-control'>
<FontAwesomeIcon className='skip-backward' icon ={faAngleLeft} size = '2x' onClick={() => skipHandler('skip-backward')}/>
<FontAwesomeIcon className='play' icon ={ isPlaying? faPause : faPlay} size = '2x' onClick={playHandler} />
<FontAwesomeIcon className='skip-forward' icon ={faAngleRight} size = '2x' onClick={() => skipHandler('skip-forward')}/>
</ div>

</div>
)}

export default  Player;