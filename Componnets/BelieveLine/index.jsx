import React from 'react'
import styles from './style.module.scss'
import { LuDessert } from "react-icons/lu";

export default function BelieveLine() {
  return (
    <div className={styles.believeLine}>
      <ul className={styles.advantagesList}>
        <li>
          <LuDessert />יצירתיות באמנות האפייה
        </li>
        <li>
          <LuDessert />טעמים מופלאים, אהבה וזמן
        </li>
        <li>
          <LuDessert />חומרי גלם איכותיים וטריים
        </li>
        <li>
          <LuDessert />מגוון רחב, מתאים לטעמים
        </li>
      </ul>
    </div>
  )
}
