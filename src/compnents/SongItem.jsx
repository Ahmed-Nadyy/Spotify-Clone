import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

const SongItem = ({name,image,views,duration,albumName,id}) => {

    const {playWithId} = useContext(PlayerContext);
    return (
        <div onClick={()=>playWithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
             <img width={"180px"}  className='h-[150px]' src={image} alt="" />
             <p className='font-bold mt-2 mb-1'>{name}</p>
             <p className='text-gray-200 text-sm'>{albumName}</p>
             <div className="flex justify-around items-center">
             <p className='font-bold mt-2 mb-1'>{duration}</p>
             <div className="flex justify-between gap-1">
                <FontAwesomeIcon icon={faEye} />
                <p className='text-gray-200 text-sm'>{views}</p>
             </div>

             </div>
        </div>
    );
};

export default SongItem;