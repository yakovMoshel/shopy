import React from 'react'
import styles from './style.module.scss'


export default function SearchItem() {
  return (
    <input type="text" placeholder='חיפוש...' className={styles.input} />
  )
}
