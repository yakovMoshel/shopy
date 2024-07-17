import React from 'react'
import styles from './style.module.scss'

export default function SearchItem({ searchTerm, setSearchTerm }) {
console.log(searchTerm)
  return (
    <input 
      type="text" 
      placeholder='חיפוש...' 
      className={styles.input} 
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      
    />
  )
}