"use client";
import React, { useState } from 'react';
import styles from './style.module.scss';

export default function OrderSettings({ product }) {
    // State for quantity
    const [quantity, setQuantity] = useState(1);

    // State for selected options
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedFlavor, setSelectedFlavor] = useState('');
    const [notes, setNotes] = useState('');
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    // Handle changes
    const handleSizeChange = (e) => setSelectedSize(e.target.value);
    const handleColorChange = (e) => setSelectedColor(e.target.value);
    const handleFlavorChange = (e) => setSelectedFlavor(e.target.value);
    const handleQuantityChange = (e) => setQuantity(e.target.value);
    const handleNotesChange = (e) => setNotes(e.target.value);
    const handleFullNameChange = (e) => setFullName(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);

    return (
        <div className={styles.orderSettings}>
            <h3>בחר גודל:</h3>
            <div className={styles.options}>
                <div>
                    <input type="radio" id="small" name="size" value="small" checked={selectedSize === 'small'} onChange={handleSizeChange} />
                    <label htmlFor="small">קטן</label>
                </div>
                <div>
                    <input type="radio" id="medium" name="size" value="medium" checked={selectedSize === 'medium'} onChange={handleSizeChange} />
                    <label htmlFor="medium">בינוני</label>
                </div>
                <div>
                    <input type="radio" id="large" name="size" value="large" checked={selectedSize === 'large'} onChange={handleSizeChange} />
                    <label htmlFor="large">גדול</label>
                </div>
            </div>
        
            <h3>בחר צבע:</h3>
            <div className={styles.options}>
                {product.colors.map((color) => (
                    <div key={color}>
                        <input type="radio" id={color} name="color" value={color} checked={selectedColor === color} onChange={handleColorChange} />
                        <label htmlFor={color}>{color}</label>
                    </div>
                ))}
            </div>

            <h3>בחר טעם:</h3>
            <div className={styles.options}>
                {product.flavors.map((flavor) => (
                    <div key={flavor}>
                        <input type="radio" id={flavor} name="flavor" value={flavor} checked={selectedFlavor === flavor} onChange={handleFlavorChange} />
                        <label htmlFor={flavor}>{flavor}</label>
                    </div>
                ))}
            </div>

            <h3>בחר כמות:</h3>
            <div className={styles.quantity}>
                <button className={styles.buttonQuantity}
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</button>

                <input type="number" id="quantity" name="quantity"
                    min="1" max={product.stock} value={quantity}
                    onChange={handleQuantityChange} />

                <button className={styles.buttonQuantity}
                    onClick={() => quantity < product.stock && setQuantity(quantity + 1)}>+</button>
            </div>

            <h3>הערות:</h3>
            <textarea value={notes}
                onChange={handleNotesChange}
                className={styles.notes} placeholder="הכנס הערות כאן..." />

            <h3>פרטי המזמין:</h3>
            <div className={styles.formRow}>
                <div className={styles.formGroup}>
                    <label htmlFor="fullName">שם מלא:</label>
                    <input type="text" id="fullName" name="fullName" value={fullName} onChange={handleFullNameChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="phone">טלפון:</label>
                    <input type="tel" id="phone" name="phone" value={phone} onChange={handlePhoneChange} required />
                </div>
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="email">אימייל:</label>
                <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />
            </div>

            <button className={styles.orderButton}
                onClick={() =>
                console.log({ 
                product, selectedSize, selectedColor, selectedFlavor, quantity, notes, fullName, phone, email })}
            >הזמנה</button>
        </div>
    );
}
