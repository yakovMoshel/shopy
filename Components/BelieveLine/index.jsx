import React from 'react';
import styles from './style.module.scss';
import { BiDish, BiCake, BiHappyAlt } from 'react-icons/bi';

export default function BelieveLine() {
  const advantages = [
    
    { icon: <BiDish />, title: "טעם ועיצוב ייחודי", description: "חשוב לי שתהנו מעוגה שתהיה טעימה ולא רק יפה. לכן אני בוחרת חומרי גלם איכותיים שיבטיחו שכל החוגגים ייהנו מהעוגה, ומקפידה לאפות אותה בסמוך למועד ההזמנה" },
    { icon: <BiCake />, title: "עיצובים ייחודיים בהתאמה אישית", description: "אני לא רק אופה עוגות. חשוב לי לעצב בדיוק את העוגה שמתאימה לכם ולטעם האישי שלכם" },
    { icon: <BiHappyAlt />, title: "אווירה נעימה וחווייה אישית", description: "אני דואגת להעניק יחס אישי ואווירה נעימה לכל לקוחה ולקוח, עם ייעוץ וליווי מרגע ההזמנה ועד האיסוף" },
  ];

  return (
<div className={styles.believeLine}>
  {advantages.map((advantage, index) => (
    <div key={index} className={styles.advantageItem}>
      <div className={styles.icon}>{advantage.icon}</div>
      <div className={styles.text}>
        <h4>{advantage.title}</h4>
        <p>{advantage.description}</p>
      </div>
    </div>
  ))}
</div>

  );
}
