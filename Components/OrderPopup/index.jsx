"use client";
import React, { useState } from 'react';
import axios from 'axios';
import styles from './style.module.scss';
import { set } from 'mongoose';

export default function OrderPopup({ item, onClose }) {
    const [formData, setFormData] = useState({
        size: '',
        color: '',
        flavor: '',
        quantity: 1,
        notes: '',
        customerName: '',
        phoneNumber: ''
    });
    const [popupMessage, setPopupMessage] = useState('');
    const [loader, setLoader] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (name, value) => {
        setFormData(prev => ({
            ...prev,
            [name]: prev[name] === value ? '' : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);
        try {
            const response = await axios.post('/api/send-email', {
                orderDetails: { ...formData, productName: item.name }
            });
            if (response.data.success) {
                setPopupMessage('ההזמנה שלך התקבלה! ניצור איתך קשר בהקדם כדי לסגור את הפרטים.');
            } else {
                setPopupMessage('שגיאה בשליחת ההזמנה. אנא נסה שוב.');
            }
        } catch (error) {
            setPopupMessage('שגיאה בשליחת ההזמנה. אנא נסה שוב.');
        }
    };

    return (
        <div className={styles.popupOverlay}>
            <div className={styles.popupContent}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                {!popupMessage ? (
                    <form onSubmit={handleSubmit} className={styles.orderForm}>
                        <h3>פרטי הזמנה</h3>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label>גודל:</label>
                                <div className={styles.checkboxGroup}>
                                    {['small', 'medium', 'large'].map(size => (
                                        <label key={size}>
                                            <input 
                                                type="checkbox"
                                                name="size"
                                                value={size}
                                                checked={formData.size === size}
                                                onChange={() => handleCheckboxChange('size', size)}
                                            />
                                            {size === 'small' ? 'קטן' : size === 'medium' ? 'בינוני' : 'גדול'}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label>צבע:</label>
                                <div className={styles.checkboxGroup}>
                                    {item.colors.map(color => (
                                        <label key={color}>
                                            <input 
                                                type="checkbox"
                                                name="color"
                                                value={color}
                                                checked={formData.color === color}
                                                onChange={() => handleCheckboxChange('color', color)}
                                            />
                                            {color}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label>טעם:</label>
                                <div className={styles.checkboxGroup}>
                                    {item.flavors.map(flavor => (
                                        <label key={flavor}>
                                            <input 
                                                type="checkbox"
                                                name="flavor"
                                                value={flavor}
                                                checked={formData.flavor === flavor}
                                                onChange={() => handleCheckboxChange('flavor', flavor)}
                                            />
                                            {flavor}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="notes">הערות:</label>
                                <textarea 
                                    id="notes" 
                                    name="notes" 
                                    value={formData.notes} 
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="customerName">שם:</label>
                                <input 
                                    type="text" 
                                    id="customerName" 
                                    name="customerName" 
                                    value={formData.customerName} 
                                    onChange={handleInputChange}
                                    required 
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="phoneNumber">טלפון:</label>
                                <input 
                                    type="tel" 
                                    id="phoneNumber" 
                                    name="phoneNumber" 
                                    value={formData.phoneNumber} 
                                    onChange={handleInputChange}
                                    required 
                                />
                            </div>
                        </div>

                       { !loader?                        <button type="submit" className={styles.submitButton}>
                            שליחה
                        </button>:
                        <div className={styles.loader}></div>
                        }

                    </form>
                ) : (
                    <div className={styles.messageContainer}>
                        <div className={styles.popupMessage}>
                            {popupMessage}
                            <button onClick={onClose} className={styles.closeButton}></button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
