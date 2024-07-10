"use client"
import React, { useState } from 'react';
import styles from './style.module.scss';
import { SiCakephp } from "react-icons/si";
import { FaCookie } from "react-icons/fa6";
import { LuCroissant } from "react-icons/lu";
import { LuWheatOff } from "react-icons/lu";
import SearchItem from '../SearchItem';

export default function SideBar() {
  const [category, setCategory] = useState('הכל');
  return (
    <div className={styles.sideBar}>
      <SearchItem/>
      <ul>
        <li onClick={() => setCategory('הכל')}>הכל</li>
        <li onClick={() => setCategory('עוגות')}><SiCakephp /> עוגות</li>
        <li onClick={() => setCategory('עוגיות')}><FaCookie />עוגיות</li>
        <li onClick={() => setCategory('מאפים')}><LuCroissant /> מאפים</li>
        <li onClick={() => setCategory('ללא גלוטן')}><LuWheatOff /> ללא גלוטן</li>
      </ul>
    </div>
  );
}
