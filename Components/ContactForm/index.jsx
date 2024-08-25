"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import axios from "axios";

export default function ContactForm({ type = "line" }) {
  const [popupMessage, setPopupMessage] = useState('');

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const formClassName = type === "square" ? styles.squareForm : styles.lineForm;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendContactForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/send-email', {
        type: 'contact',
        orderDetails: { ...formData }
      });
      if (response.data.success) {
        alert('ההודעה שלך נשלחה ! ניצור איתך קשר בהקדם.');
      } else {
        alert('שגיאה בשליחת ההודעה. אנא נסה שוב.');
      }
    } catch (error) {
      alert('שגיאה בשליחת ההזמנה. אנא נסה שוב.');
    }
  };

  return (
    <div className={formClassName}>
      <form onSubmit={sendContactForm}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="שם"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="אימייל"
              onChange={handleInputChange}
              required />
          </div>
          <div className={styles.formGroup}>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="טלפון"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <textarea
              id="message"
              name="message"
              placeholder="הודעה"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit" disabled={!formData.name || !formData.phone || !formData.message}>
            שלח
          </button>
        </div>
      </form>
    </div>
  );
}
