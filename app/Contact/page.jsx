import React from 'react';
import styles from './style.module.scss';
import { FaPhone, FaFacebook } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import ContactDetails from '@/Componnets/ContactDetails';
import ContactForm from '@/Componnets/ContactForm';
import SocialLinks from '@/Componnets/SocialLinks';

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h2>יצירת קשר</h2>
      <ContactDetails />
      <ContactForm />
      <SocialLinks />

    </div>
  );
}
