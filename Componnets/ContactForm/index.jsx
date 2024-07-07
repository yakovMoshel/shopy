"use client"
import React, { useState } from 'react'
import styles from './style.module.scss';
import { creatFormAction } from '@/server/actions/from.action';


export default function contactForm() {

  const [value, setValue] = useState('')

// const handelSubmit = (e) => {
// e.preventDefault()
// console.log(e.target.value)
// }

return (
  <div className={styles.contactForm}>
    <h3>כתבו לי</h3>
    <form action={creatFormAction}>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="name">שם:</label>
          <input 
            type="text" 
            id="name" 
            name="name"  
            onChange={e => setValue(e.target.value)} 
            required 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">טלפון:</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            required 
          />
        </div>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">הודעה:</label>
        <textarea 
          id="message" 
          name="message" 
          required 
        ></textarea>
      </div>
      <button type="submit" disabled={!value}>שלח</button>
    </form>
  </div>
);
}