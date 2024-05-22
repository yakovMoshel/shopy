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
    <h3> כתבו לי</h3>
    <form action={creatFormAction}>
      <div>
        <label htmlFor="name">שם:</label>
        <input type="text" id="name" name="name"  onChange={e=>setValue(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">אימייל:</label>
        <input type="email" id="email" name="email"/>
      </div>
      <div>
        <label htmlFor="message">הודעה:</label>
        <textarea id="message" name="message" ></textarea>
      </div>
      <button type="submit" disabled={!value}>שלח</button>
    </form>
  </div>
  )
}
