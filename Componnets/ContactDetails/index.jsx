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
      <FaPhone className={styles.icon} /> טלפון: 123-456-7890
    </p>
    <p>
      <MdEmail className={styles.icon} /> אימייל: contact@example.com
    </p>
    <p>
      <FaLocationDot className={styles.icon} /> כתובת: רחוב הכרמל 123, תל אביב
    </p>
  </div>
  )
}
