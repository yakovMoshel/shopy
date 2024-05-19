import React from 'react'
import styles from './style.module.scss'

import { SiCakephp } from "react-icons/si";
import { FaCookie } from "react-icons/fa6";
import { LuCroissant } from "react-icons/lu";
import { LuWheatOff } from "react-icons/lu";
import SearchItem from '../SearchItem';

export default function sideBar() {
  return (
    <div className={styles.sideBar}>
      <SearchItem/>
    <ul>
        <li>הכל</li>

        <li><SiCakephp /> עוגות </li>

        <li><FaCookie />עוגיות  </li>

        <li><LuCroissant />
            מאפים</li>

        <li><LuWheatOff />
            ללא גלוטן </li>
    </ul>
</div>
  )
}
