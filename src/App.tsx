import './index.scss';
import styles from './App.module.scss';
import React from 'react';

import Settings from 'settings';

const App = () => {

  const audio: any = new Audio('/demo.mp3');

  const onPlay = async () => {
    if(!audio.paused) return;
    const selected_device_output: string | null = localStorage.getItem("audio-device-id");
    audio.load();
    if(selected_device_output) audio.setSinkId(selected_device_output);
    audio.play();
    audio.loop = true;
    audio.volume = 0.1;
  };

  return(
    <div className={styles.container} onMouseEnter={onPlay} onClick={onPlay}>

      <audio autoPlay loop />

      <Settings audio={audio} />

    </div>
  );
}

export default App;
