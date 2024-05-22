"use client"
import React from 'react';
import { usePathname } from 'next/navigation'
import styles from './style.module.scss';
import Link from 'next/link';

import { FaRegCopyright } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTikTok } from "react-icons/ai";



export default function Footer() {
  const path = usePathname()
  const list = [
    { name: "דף הבית", path: "/" },
    { name: "אודות", path: "/about" },
    { name: "דף מוצר", path: "/product" },
    { name: "חנות", path: "/shop" },
    { name: "בלוג", path: "/blog" },
    { name: "צור קשר", path: "/contact" },
    { name: "סל קניות", path: "/cart" },
    { name: "תשלום", path: "/checkout" },
  ];

  return (
    <div className={styles.container}>


      <div className={styles.mainFooter}>
        <h3 className={styles.tital}>ניווט כללי </h3>
        {list.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={
              path === item.path ? styles.active : styles.noActive
            }
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className={styles.info}>
        <p className={styles.icon}> <CiTwitter /> </p>
        <p className={styles.icon}> <FaFacebookF /> </p>
        <p className={styles.icon}> <FaInstagram /> </p>
        <p className={styles.icon}> <AiOutlineTikTok /> </p> 
      </div>


      
      <div className={styles.endFooter}>
        <h3>
          כל הזכויות שמורות <FaRegCopyright />
        </h3>
      </div>
    </div>
  );
}
