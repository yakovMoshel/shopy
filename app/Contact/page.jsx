import React from 'react';
import styles from './style.module.scss';
import { FaPhone, FaFacebook } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import ContactDetails from '@/Components/ContactDetails';
import ContactForm from '@/Components/ContactForm';
import SocialLinks from '@/Components/SocialLinks';

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h2>יצירת קשר</h2>
      <div className={styles.contactContent}>
        <div className={styles.contactDetails}>
          <ContactDetails />
        </div>
        <div className={styles.contactForm}>
          <ContactForm type="square" />
        </div>
      </div>
      <div className={styles.socialLinks}>
        <SocialLinks />
      </div>
    </div>
  );
}
