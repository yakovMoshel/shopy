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
import ContactForm from '../ContactForm';

export default function Footer() {
  const path = usePathname();
  const links = [
    { name: "דף הבית", path: "/" },
    { name: "אודות", path: "/about" },
    { name: "חנות", path: "/shop" },
    { name: "בלוג", path: "/blog" },
    { name: "צור קשר", path: "/contact" },
    { name: "מועדפים", path: "/favorites" }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.footerContent}>
        <div className={styles.column}>
          <h3 className={styles.title}>קצת עליי</h3>
          <div className={styles.about}>
            היי, אני אילה, קונדיטורית מוסמכת ומעצבת עוגות, עם תשוקה ליצור עוגות ייחודיות וקסומות שיהפכו כל אירוע לחגיגה בלתי נשכחת          
          </div>
        </div>

        <div className={styles.column}>
          <h3 className={styles.title}>ניווט כללי</h3>
          <div className={styles.linkWrapper}>
            <div className={styles.linkColumn}>
              {links.slice(0, 3).map((item, index) => (
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
            <div className={styles.linkColumn}>
              {links.slice(3).map((item, index) => (
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
          </div>
        </div>

        <div className={styles.column}>
          <h3 className={styles.title}>בואו לטיקטוק שלי</h3>
          <div className={styles.socialIcons}>
            <p className={styles.icon}><CiTwitter /></p>
            <p className={styles.icon}><FaFacebookF /></p>
            <p className={styles.icon}><FaInstagram /></p>
            <p className={styles.icon}><AiOutlineTikTok /></p>
          </div>
        </div>
      </div>
      <div className={styles.formContainer}>
        <ContactForm />
      </div>
      <div className={styles.endFooter}>
        <p>
          כל הזכויות שמורות <FaRegCopyright /> 2024
        </p>
      </div>
    </div>
  );
}
