"use client"
import React from 'react';
import {usePathname} from 'next/navigation'
import { FaRegCopyright } from "react-icons/fa6";
import styles from './style.module.scss';
import Link from 'next/link';

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
        {list.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={
               path === item.path ? styles.active : ""
            }
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className={styles.endFooter}>
        <h3>
          כל הזכויות שמורות <FaRegCopyright />
        </h3>
      </div>
    </div>
  );
}
