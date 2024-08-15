import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faHouse, faMagnifyingGlass, faPlus, faRectangleList } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
    return (
        <div className='w-[25%] h-full flex-col gap-2 pr-2 text-white hidden lg:flex'>
            <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around" >
                <div onClick={()=>navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer' >
                  <FontAwesomeIcon  className='w-6' icon={faHouse} /> 
                  <p className=' font-bold'>Home</p>
                </div>
                <div className='flex items-center gap-3 pl-8 cursor-pointer' >
                <FontAwesomeIcon className='w-6' icon={faMagnifyingGlass} />
                  <p className=' font-bold'>Search</p>
                </div>
            </div>
            <div className='bg-[#121212] h-[85%] rounded'>
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3"> 
                <FontAwesomeIcon icon={faRectangleList} />
                <p className=' font-semibold'>Your Library</p>
                </div>
                <div className="flex items-center gap-3"> 
                <FontAwesomeIcon icon={faArrowRight} />
                <FontAwesomeIcon icon={faPlus} /> 
                </div>
              </div>
              <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex-col items-start justify-start gap-1 pl-4">
                <h1> Create your first playist</h1>
                <p className=' font-thin text-[#a5a5a5]'>its's esay we will help you</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create playlist</button>
              </div>
              <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex-col items-start justify-start gap-1 pl-4">
                <h1> Let's findsome podcasts to follow</h1>
                <p className=' font-thin  text-[#a5a5a5]'>we'll keep you update on new episodes</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse podcasts</button>
              </div>
            </div>
        </div>
    );
};

export default Sidebar;