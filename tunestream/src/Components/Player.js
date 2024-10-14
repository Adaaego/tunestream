import React, {useRef, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Player = ({currentSong, isPlaying, setIsPlaying}) => {

    const audioReference = useRef(null);

    //STATE
    const [songInfo, setSongInfo] =useState({
        currentTime : 'null',
        duration : 'null',
    })
    
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

    const dragHandler = (e) => {
        audioReference.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime : e.target.value})
    }


    //function to update the current time and duration of the song
    const timeUpdateHandler = (e) => {
     const currentTime = e.target.currentTime;
     const duration = e.target.duration;
     setSongInfo({currentTime : currentTime, duration : duration});
     console.log(duration)
    }

     //function to update time 
   const getTime =(time) => {
    return (
        Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    )
   }

    
return(


<div className='player' >

<div className=' time-control'>
<p>{getTime(songInfo.currentTime)}</p>
<input type='range' min ={0} max={songInfo.duration} value={songInfo.currentTime} onChange={dragHandler}></input>
<p>{getTime(songInfo.duration)}</p>
</div>

<div className='play-control'>
<FontAwesomeIcon className='skip-backward' icon ={faAngleLeft} size = '2x'/>
<FontAwesomeIcon className='play' icon ={faPlay} size = '2x' onClick={playHandler} />
<FontAwesomeIcon className='skip-forward' icon ={faAngleRight} size = '2x'/>
</ div>

<audio  onTimeUpdate ={timeUpdateHandler}  onLoadedMetadata={timeUpdateHandler} src ={currentSong.audio} ref={audioReference}></audio>
</div>
)}

export default  Player;