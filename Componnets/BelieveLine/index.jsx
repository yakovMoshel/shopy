import React from 'react'
import styles from './style.module.scss'
import { LuDessert } from "react-icons/lu";

export default function BelieveLine() {
  return (
    <div className={styles.believeLine}>
      <ul className={styles.advantagesList}>
        <li>יצירתיות באמנות האפייה<LuDessert />
        </li>
        <li>טעמים מופלאים, אהבה וזמן<LuDessert />
        </li>
        <li>חומרי גלם איכותיים וטריים<LuDessert />
        </li>
        <li>מגוון רחב, מתאים לטעמים<LuDessert />
        </li>
      </ul>
    </div>
  )
}
