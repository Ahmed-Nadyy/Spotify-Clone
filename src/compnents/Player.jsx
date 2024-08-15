import React, { useContext, useState } from 'react';
import { faBackwardStep, faCirclePlay, faForwardStep, faHeadphones, faMaximize, faMicrophone, faMinimize, faPause, faPlay, faRectangleList, faRepeat, faShuffle, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PlayerContext } from '../context/PlayerContext';

const Player = () => {
    const [catchh,setCatchh]=useState(false);

    const clickState=()=>{
        setCatchh(!catchh);
    }

    const {seekBar, seekBg,track,time}= useContext(PlayerContext);
    return (
        <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
            <div className="hidden lg:flex items-center gap-4">
                <img src={track.musicImg} width={"60px"} height={"60px"} alt="" />
                <div>
                    <p>{track.musicName}</p>
                    <p>{track.duration}</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-1 m-auto'>
                <div className="flex gap-4">
                    <FontAwesomeIcon className='w-4 cursor-pointer' icon={faShuffle} />
                    <FontAwesomeIcon className='w-4 cursor-pointer' icon={faBackwardStep} />
                    {catchh ?
                        <FontAwesomeIcon onClick={clickState} className='w-4 cursor-pointer' icon={faPause} />
                        : <FontAwesomeIcon onClick={clickState} className='w-4 cursor-pointer' icon={faPlay} />
                    }
                    
                    <FontAwesomeIcon className='w-4 cursor-pointer' icon={faForwardStep} />
                    <FontAwesomeIcon className='w-4 cursor-pointer' icon={faRepeat} />
                </div>
                <div className="flex items-center gap-5">
                <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div ref={seekBg} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
                        <hr ref={seekBar} className='h-1 border-none w-20 bg-green-800 rounded-full' />
                    </div>
                    <p>{time.totalTime.minute}:{time.totalTime.second}</p>
                </div>
            </div>
            <div className="hidden lg:flex items-center gap-2 opacity-75">
            <FontAwesomeIcon  className='w-4 cursor-pointer' icon={faCirclePlay} />
            <FontAwesomeIcon  className='w-4 cursor-pointer' icon={faMicrophone} />
            <FontAwesomeIcon className='w-4 cursor-pointer' icon={faRectangleList} />
            <FontAwesomeIcon className='w-4 cursor-pointer' icon={faHeadphones} />
            <FontAwesomeIcon className='w-4 cursor-pointer' icon={faVolumeHigh} />
            <div className="w-20 bg-gray-50 h-1 rounded"></div>
            <FontAwesomeIcon className='w-4 cursor-pointer' icon={faMinimize} />
            <FontAwesomeIcon className='w-4 cursor-pointer' icon={faMaximize} />
            </div>
        </div>

    );
};

export default Player;