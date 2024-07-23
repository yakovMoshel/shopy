import React from 'react';
import styles from './style.module.scss';
import BelieveLine from '../../Componnets/BelieveLine';

export default function About() {
  return (
    <div className={styles.about}>
      {/* <img src={confectionerImage} alt="Confectioner" className={styles.image} /> */}
      <div className={styles.bio}>
        <h2>נעים להכיר</h2>
        <p>
        היי, אני אילה, קונדיטורית מוסמכת ומעצבת עוגות, עם תשוקה ליצור עוגות ייחודיות וקסומות שיהפכו כל אירוע לחגיגה בלתי נשכחת
למה דווקא אני?
- עיצובים ייחודיים בהתאמה אישית: אני לא רק אופה עוגות. חשוב לי לעצב בדיוק את העוגה שמתאימה לכם ולטעם האישי שלכם.
- אווירה נעימה וחווייה אישית: אני דואגת להעניק יחס אישי ואווירה נעימה לכל לקוחה ולקוח, עם ייעוץ וליווי מרגע ההזמנה ועד האיסוף.
נתראה בחגיגה הבאה שלך
        </p>
      </div>
      <BelieveLine />
    </div>
  );
}
