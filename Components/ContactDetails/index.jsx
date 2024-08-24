import React from 'react'
import styles from './style.module.scss';
import { FaPhone, FaFacebook } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

export default function ContactDetails() {
  return (
    <div className={styles.details}>
    <h3>פרטי יצירת קשר</h3>
    <p>
      <FaPhone className={styles.icon} /> טלפון: 058-7995083
    </p>
    <p>
      <MdEmail className={styles.icon} /> אימייל: Ayalapastry@gmail.com
    </p>
    <p>
      <FaLocationDot className={styles.icon} /> כתובת: קרית אתא
    </p>
  </div>
  )
}
