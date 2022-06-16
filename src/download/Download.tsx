import styles from './Download.module.scss';
import React from 'react';
import {AiOutlineApple, AiOutlineWindows} from 'react-icons/ai'

const Download = () => {
  return (
    <div className={styles.container}>

      <div>
        <a href={"ipfs://bafybeidovoxgyey6t7yosinnrri4pubwjhqc2vm2vj7msbbdjgugz6mztm"} target="_blank" rel="noreferrer" download="ctalk.zip">
          <span>Download for Mac</span>
          <span><AiOutlineApple/></span>
        </a>
      </div>

      <div>
        <a href={"ipfs://bafybeihsyshfd5naabzdfruwlnaforxqrdjcjfp3mu6rbg5f7dj6w3ssai"} target="_blank" rel="noreferrer" download="ctalk.zip">
          <span>Download for Windows</span>
          <span><AiOutlineWindows/></span>
        </a>
      </div>

    </div>
  )
}

export default Download