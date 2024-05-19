import React from 'react'
import styles from './style.module.scss'
import BelieveLine from '@/Componnets/BelieveLine'

export default function about() {
  return (
    <div className={styles.about}>
      {/* <img src={confectionerImage} alt="Confectioner" className={styles.image} /> */}
      <div className={styles.bio}>
        <h2>קונדיטורית - שמי אילה</h2>
        <p>שלום! אני אילה, קונדיטורית במקצוע ומאהבת מאוד של כל דבר הקשור למתוקים.
          התמקצעתי באופה וקונדיטוריה במסלול המקצועי במכללת הבישול הצפונית.
          מאז אני מפיקה מאפים ועוגות מעוצבות בעבודת יד, שמחה לחלוק את כל יצירותיי וטעמים מופלאים עם העולם!
          בואו ותגלו את הטעמים הנהדרים שלנו!</p>
      </div>

      <BelieveLine />
    </div>
  )
}
