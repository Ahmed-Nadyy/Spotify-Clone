import React from 'react';
import { useNavigate } from 'react-router-dom';

const AlbumItems = ({image,name,desc,id}) => {
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate(`/album/${id}`)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
            <img width={"180px"}  className='h-[100px]' src={image} alt="" />
            <p className='font-bold mt-2 mb-1'>{name}</p>
            <p className='text-gray-200 text-sm'>{desc}</p>
        </div>
    );
};

export default AlbumItems;