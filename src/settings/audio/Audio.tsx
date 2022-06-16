import styles from './Audio.module.scss';
import React, {useState } from 'react';
import { useEffect } from 'react';

const Audio = ({audio}:{audio: any}) => {

  interface MediaDevices {
    deviceId: string,
    groupId: string,
    kind: string,
    label: string,
  }

  const [devices, setDevices] = useState<MediaDevices[]>([]);

  useEffect(() => {
    (async () => {

        const constraint = { audio: true, video: true };

        await navigator.mediaDevices.getUserMedia(constraint);

        const devices = await navigator.mediaDevices.enumerateDevices();

        setDevices(devices);
    })();
  }, []);

  const onChangeAudio = async (event: React.ChangeEvent<HTMLSelectElement>): Promise<void> => {
    const deviceId = event.target.value;
    localStorage.setItem("audio-device-id", deviceId);
    audio.setSinkId(deviceId);
  };

  const filterKind = (device: MediaDevices[], kind: "audiooutput" | "videoinput"): MediaDevices[] => {
    return device.filter((device: typeof devices[0]) => device.kind === kind);
  };

  const settingsFilter = (device: MediaDevices[]): MediaDevices[] => {
    const audioSettingsId = localStorage.getItem("audio-device-id");
    if(!audioSettingsId) return device;
    const index = device.findIndex((i: MediaDevices) => i.deviceId === audioSettingsId);
    const savedDevice = [...device];
    const d = savedDevice.splice(index, 1);
    savedDevice.unshift(d[0]);
    return savedDevice;
  };

  return (
    <div className={styles.container}>

      <p>Microphone</p>
      <select onChange={onChangeAudio}>
        {devices.length && settingsFilter(filterKind(devices, "videoinput")).map((device: MediaDevices, index: number) => 
          <option key={index} value={device.deviceId}> {device.label} </option>
        )}
      </select>

      <p>Speakers</p>
      <select onChange={onChangeAudio}>
        {devices.length && settingsFilter(filterKind(devices, "audiooutput")).map((device: MediaDevices, index: number) => 
          <option key={index} value={device.deviceId}> {device.label} </option>
        )}
      </select>

    </div>
  )
}

export default Audio