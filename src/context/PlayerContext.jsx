import { createContext, useEffect, useRef, useState } from "react";
import musicData from "../constant/musicData";

export const PlayerContext = createContext(); 

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const SeekBar = useRef();

    const [track, setTrack] = useState(musicData[1]); 
    const [playStatues, setPlayStatues] = useState(false);
    const [time, setTime] = useState({
        currentTime:{
            second:0,
            minute:0,
        },
        totalTime:{
            second:0,
            minute:0,
        }
    })
    
    const play=()=>{
        audioRef.current.play();
        setPlayStatues(true);

    }
    const pause=()=>{
        audioRef.current.pause();
        setPlayStatues(false);
        
    }

    const playWithId= async(id)=>{
        await setTrack(musicData[id-1]);
        await audioRef.current.play();
        setPlayStatues(true);

    }

    useEffect(()=>{
        setTimeout(()=>{
            audioRef.current.ontimeupdate = () =>{
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60),
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60),
                    }
                })
            }
        },1000);
    },[audioRef])

    const contextValue = {
        audioRef,
        seekBg,
        SeekBar,
        track,setTrack,
        playStatues,setPlayStatues,
        time,setTime,
        play,pause,
        playWithId,

    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children} 
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider;
