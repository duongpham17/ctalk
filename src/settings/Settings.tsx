import styles from './Settings.module.scss';
import React from 'react';

import Audio from './audio';
// import Screen from './screen'

const Settings = ({audio}: {audio: HTMLAudioElement}) => {
  return (
    <div className={styles.container}>
        <h1>Settings</h1>
        <Audio audio={audio} />
        {/* <Screen /> */}
    </div>
  )
}

export default Settings