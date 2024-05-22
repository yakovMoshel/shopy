"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import styles from './style.module.scss';
import Link from 'next/link';

import { FaRegCopyright } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTikTok } from "react-icons/ai";

export default function Footer() {
  const path = usePathname();
  const list1 = [
    { name: "דף הבית", path: "/" },
    { name: "אודות", path: "/about" },
    { name: "דף מוצר", path: "/product" },
    { name: "חנות", path: "/shop" },
  ];
  const list2 = [
    { name: "בלוג", path: "/blog" },
    { name: "צור קשר", path: "/contact" },
    { name: "סל קניות", path: "/cart" },
    { name: "תשלום", path: "/checkout" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.footerContent}>
        <div className={styles.column}>
          <h3 className={styles.title}>אודות</h3>
          <p>
            אנו מתמחים במוצרים איכותיים בתחום הקונדיטוריה ומציעים מגוון רחב של מוצרים לכל צורך. המטרה שלנו היא לספק את המוצרים האיכותיים ביותר בשירות הטוב ביותר.
          </p>
        </div>

        <div className={styles.column}>
          <h3 className={styles.title}>ניווט כללי</h3>
          {list1.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={
                path === item.path ? `${styles.link} ${styles.active}` : `${styles.link} ${styles.noActive}`
              }
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className={styles.column}>
          <h3 className={styles.title}>עוד קישורים</h3>
          {list2.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={
                path === item.path ? `${styles.link} ${styles.active}` : `${styles.link} ${styles.noActive}`
              }
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className={styles.column}>
          <h3 className={styles.title}>עקבו אחרינו</h3>
          <div className={styles.socialIcons}>
            <p className={styles.icon}><CiTwitter /></p>
            <p className={styles.icon}><FaFacebookF /></p>
            <p className={styles.icon}><FaInstagram /></p>
            <p className={styles.icon}><AiOutlineTikTok /></p>
          </div>
        </div>
      </div>

      <div className={styles.endFooter}>
        <p>
          כל הזכויות שמורות <FaRegCopyright /> 2024
        </p>
      </div>
    </div>
  );
}
