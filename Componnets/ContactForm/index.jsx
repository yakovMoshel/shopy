"use client"
import React, { useState } from 'react'
import styles from './style.module.scss';
import { creatFormAction } from '@/server/actions/from.action';

export default function ContactForm({ type = "line" }) {

  const [value, setValue] = useState('')

  // קביעת ה-className בהתאם לפרופס type
  const formClassName = type === "square" ? styles.squareForm : styles.lineForm;

  return (
    <div className={formClassName}>
      <form action={creatFormAction}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <input 
              type="text" 
              id="name" 
              name="name"  
              placeholder="שם" 
              onChange={e => setValue(e.target.value)} 
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              placeholder="טלפון" 
              required 
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <textarea 
              id="message" 
              name="message" 
              placeholder="הודעה"
              required 
            ></textarea>
          </div>
          <button type="submit" disabled={!value}>שלח</button>
        </div>
      </form>
    </div>
  );
}
