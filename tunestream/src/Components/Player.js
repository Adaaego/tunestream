import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Player = ({
    currentSong,
    isPlaying,
    setIsPlaying,
    audioReference,
    songInfo,
    setSongInfo,
    songs,
    setCurrentSong,
    setSong, 
    songSelectHandler
}) => {
    // USE EFFECT TO CHANGE THE ACTIVE STATUS AS THE SONG CHANGES
    useEffect(() => {
        const updatedSongs = songs.map((s) => ({
            ...s,
            active: s.id === currentSong.id, // Set active true for the selected song
        }));

        setSong(updatedSongs); // Update the songs state
    }, [currentSong]);

    // EVENTS
    const playHandler = () => {
        if (isPlaying) {
            audioReference.current.pause();
        } else {
            audioReference.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    // Event Handlers
    const dragHandler = (e) => {
        audioReference.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value });
    };

    const skipHandler = (direction) => {
        // finding the index of the current song
        const currentIndex = songs.findIndex(song => song.id === currentSong.id);
        let nextSong;

        if (direction === 'skip-forward') {
            nextSong = songs[(currentIndex + 1) % songs.length];
        } else if (direction === 'skip-backward') {
            nextSong = currentIndex === 0 ? songs[songs.length - 1] : songs[currentIndex - 1];
        }

        songSelectHandler(nextSong);
    };

    // function to update time
    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
        );
    };
// Function to update the translateX transform based on animationPercentage
const trackAnimation = {
    transform: `translateX(${songInfo.animationPercentage}%)`
  };

    return (
        <div className='player'>
            <div className='time-control'>
                <p>{getTime(songInfo.currentTime)}</p>
                <div className='track'>
                <input
                    type='range'
                    min={0}
                    max={songInfo.duration || 0}
                    value={songInfo.currentTime}
                    onChange={dragHandler}
                />
                <div className='animate-track'  style={trackAnimation}></div>
                </div>
                <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
            </div>

            <div className='play-control'>
                <FontAwesomeIcon
                    className='skip-backward'
                    icon={faAngleLeft}
                    size='2x'
                    onClick={() => skipHandler('skip-backward')}
                />
                <FontAwesomeIcon
                    className='play'
                    icon={isPlaying ? faPause : faPlay}
                    size='2x'
                    onClick={playHandler}
                />
                <FontAwesomeIcon
                    className='skip-forward'
                    icon={faAngleRight}
                    size='2x'
                    onClick={() => skipHandler('skip-forward')}
                />
            </div>
        </div>
    );
};

export default Player;
