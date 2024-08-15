import React from 'react';
import Navbar from './Navbar';
import AlbumItems from './AlbumItems';
import albumData from '../constant/albumData'; 
import musicData from '../constant/musicData'; 
import SongItem from './SongItem';

const DisplayHome = () => {
    return (
        <>
           <Navbar /> 
           <div className="mb-4 mx-4">
            <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
            <div className="flex overflow-auto">
            {albumData.map((item,index)=>(
                <AlbumItems key={index} name={item.albumName} image={item.albumImg} desc={item.albumArtist} id={item.id} />
                ))}
            </div>
           </div>
           <div className="mb-4 mx-4">
            <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
            <div className="flex overflow-auto">
            {musicData.map((item,index)=>(
                <SongItem key={index} name={item.musicName} image={item.musicImg} albumName={item.albumName} views={item.views} id={item.counter} duration={item.duration} />
                ))}
            </div>
           </div>
        </>
    );
};

export default DisplayHome;