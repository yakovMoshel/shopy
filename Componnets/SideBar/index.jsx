'use client';
import React from 'react';
import styles from './style.module.scss';
import { SiCakephp } from "react-icons/si";
import { FaCookie } from "react-icons/fa";
import { LuCroissant, LuWheatOff } from "react-icons/lu";
import SearchItem from '../SearchItem';

const categories = [
  { label: 'הכל', icon: null, value: '' },
  { label: 'עוגת בנטו', icon: <SiCakephp />, value: 'עוגות בנטו' },
  { label: 'עוגת מוס', icon: <FaCookie />, value: 'עוגת מוס' },
  { label: 'מארזים', icon: <LuCroissant />, value: 'מארזים' },
  { label: 'עוגה מעוצבת', icon: <LuWheatOff />, value: 'עוגה מעוצבת' },
];

export default function SideBar({ setCategory, searchTerm, setSearchTerm }) {
  return (
    <div className={styles.sideBar}>
      <SearchItem searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className={styles.categories}>
        {categories.map((category, index) => (
          <div className={styles.category} key={index} onClick={() => setCategory(category.value)}>
            {category.icon} {category.label}
          </div>
        ))}
      </div>
    </div>
  );
}
