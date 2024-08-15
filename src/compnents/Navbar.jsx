import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-full px-3 flex justify-between items-center font-semibold">
                <div className="flex items-center gap-2">
                <FontAwesomeIcon onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' icon={faArrowLeft} />
                <FontAwesomeIcon onClick={()=>navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' icon={faArrowRight} />
                </div>

                <div className="flex items-center gap-4">
                    <p className='bg-white text-black text-[15px] px-4 py-1 cursor-pointer rounded-2xl hidden md:block'>Explore Premium</p>
                    <p className='bg-black py-1 px-3 rounded-2xl cursor-pointer text-[15px]'>Install App</p>
                    <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>A</p>

                </div>
            </div>
            <div className="flex items-center gap-2 mt-4 px-4">
                <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
                <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
                <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
            </div>
        </>
    );
};

export default Navbar;