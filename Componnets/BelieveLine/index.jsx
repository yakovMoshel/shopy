import React from 'react';
import styles from './style.module.scss';
import { LuDessert } from "react-icons/lu";

export default function BelieveLine() {
  const advantages = [
    { icon: <LuDessert />, title: "יצירתיות באמנות האפייה", description: "אנו יוצרים אמנות עם כל עוגה." },
    { icon: <LuDessert />, title: "טעמים מופלאים, אהבה וזמן", description: "הטעמים שלנו מגיעים מהלב." },
    { icon: <LuDessert />, title: "חומרי גלם איכותיים וטריים", description: "אנו משתמשים רק בחומרים הטובים ביותר." },
    { icon: <LuDessert />, title: "מגוון רחב, מתאים לטעמים", description: "מתאימים את המוצרים שלנו לכל טעם." },
  ];

  return (
    <div className={styles.believeLine}>
      <ul className={styles.advantagesList}>
        {advantages.map((advantage, index) => (
          <li key={index} className={styles.advantageItem}>
            <div className={styles.icon}>{advantage.icon}</div>
            <div className={styles.text}>
              <h4>{advantage.title}</h4>
              <p>{advantage.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
