import React, { useContext } from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import albumData from '../constant/albumData';
import logo from "../assets/images/Spotify_Primary_Logo_RGB_Green.png";
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import musicData from '../constant/musicData';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {
    const {playWithId} = useContext(PlayerContext);
    const {id}=useParams();
    const AlbumData = albumData[id];
    return (
        <>
            <Navbar />
            <div className="mt-10 mx-4 flex gap-8 flex-col md:flex-row md:items-end " >
                <img className='w-48 rounded' src={AlbumData.albumImg} alt="" />
                <div className="flex flex-col">
                    <p>Playlist</p>
                    <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{AlbumData.albumName}</h2>
                    <h2>{AlbumData.albumArtist}</h2>
                    <p className='mt-1 w-auto flex gap-1 items-center text-[2vh]'>
                    <img className='w-7 h-7' src={logo} alt="" />
                    <b>Spotify </b>
                    • 1,234 likes
                    • <b>50 songs, </b>
                    about 2 hr 30 min
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mx-4 mb-4 pl-2 text-[#a7a7a7]">
                <p><b className='mr-4'>#</b>Title</p>
                 <p>Album</p>
                 <p className='hidden sm:block'>Date Added</p>
                 <FontAwesomeIcon icon={faClock} />
            </div>
            <hr />
            {
                musicData.map((item,index)=>(
                    <div onClick={()=>playWithId(id)} key={index} className="grid grid-cols-3 sm:grid-cols-4 mx-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer">
                        <p className='text-white'>
                            <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                                <img className='inline e-10 mr-5 w-10 mx-2' src={item.musicImg} alt="" />
                                {item.musicName}
                        </p>
                        <p className='text-[15px]'>{AlbumData.albumName}</p>
                        <p className='text-[15px] hidden sm:block'>5 days ago</p>
                        <p className='text-[15px] text-start'>{item.duration}</p>
                    </div>
                ))
            }

             
        </>
    );
};

export default DisplayAlbum;