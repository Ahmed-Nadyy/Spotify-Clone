import { useContext } from 'react';
import './App.css';
import Display from './compnents/Display';
import Player from './compnents/Player';
import Sidebar from "./compnents/Sidebar";
import { PlayerContext } from './context/PlayerContext';

function App() {
  const { audioRef,track } = useContext(PlayerContext);

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  );
}

export default App;
