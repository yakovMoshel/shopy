'use client';
import React, { useState } from 'react';
import styles from './style.module.scss';
import { SiCakephp } from "react-icons/si";
import { FaCookie } from "react-icons/fa";
import { LuCroissant, LuWheatOff } from "react-icons/lu";
import { FaBars } from "react-icons/fa";
import SearchItem from '../SearchItem';

const categories = [
  { label: 'הכל', icon: null, value: '' },
  { label: 'עוגת בנטו', icon: <SiCakephp />, value: 'עוגות בנטו' },
  { label: 'עוגת מוס', icon: <FaCookie />, value: 'עוגת מוס' },
  { label: 'מארזים', icon: <LuCroissant />, value: 'מארזים' },
  { label: 'עוגה מעוצבת', icon: <LuWheatOff />, value: 'עוגות מעוצבות' },
];

export default function SideBar({ setCategory, searchTerm, setSearchTerm }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.sideBar}>
      <button className={styles.burgerButton} onClick={toggleMenu}>
        <FaBars />
      </button>
      <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <SearchItem searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className={styles.categories}>
          {categories.map((category, index) => (
            <div className={styles.category} key={index} onClick={() => setCategory(category.value)}>
              {category.icon} {category.label}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.categoriesDesktop}>
        <SearchItem searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {categories.map((category, index) => (
          <div className={styles.category} key={index} onClick={() => setCategory(category.value)}>
            {category.icon} {category.label}
          </div>
        ))}
      </div>
    </div>
  );
}
