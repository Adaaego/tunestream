import React, {useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Player = () => {
    return(
<div className='player' >
<div className=' time-control'>
<p>start time</p>
<input input type='range'></input>
<p>end time</p>
</div>

<div className='play-control'>
<FontAwesomeIcon className='skip-backward' icon ={faAngleLeft} size = '2x'/>
<FontAwesomeIcon className='play' icon ={faPlay} size = '2x' />
<FontAwesomeIcon className='skip-forward' icon ={faAngleRight} size = '2x'/>
</ div>
<audio></audio>
</div>
)}

export default  Player;