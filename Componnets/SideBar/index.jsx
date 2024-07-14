"use client"
import React from 'react';
import styles from './style.module.scss';
import { SiCakephp } from "react-icons/si";

import { FaCookie } from "react-icons/fa6";
import { LuCroissant } from "react-icons/lu";
import { LuWheatOff } from "react-icons/lu";
import SearchItem from '../SearchItem';

export default function SideBar({ setCategory }) {
  return (
    <div className={styles.sideBar}>
      <SearchItem/>
      <ul>
        <li onClick={() => setCategory('')}>הכל</li>
        <li onClick={() => setCategory('עוגות בנטו')}><SiCakephp /> עוגת בנטו</li>
        <li onClick={() => setCategory('עוגת מוס')}><FaCookie />עוגת מוס</li>
        <li onClick={() => setCategory('מארזים')}><LuCroissant /> מארזים</li>
        <li onClick={() => setCategory('עוגה מעוצבת')}><LuWheatOff />עוגה מעוצבת</li>
      </ul>
    </div>
  );
}