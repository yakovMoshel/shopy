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

    // Handle changes
    const handleSizeChange = (e) => setSelectedSize(e.target.value);
    const handleColorChange = (e) => setSelectedColor(e.target.value);
    const handleFlavorChange = (e) => setSelectedFlavor(e.target.value);
    const handleQuantityChange = (e) => setQuantity(e.target.value);
    const handleNotesChange = (e) => setNotes(e.target.value);

    return (
        <div className={styles.OrderSettings}>
            <h3>בחר גודל:</h3>
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
        
            <h3>בחר צבע:</h3>
            <div>
                {product.colors.map((color) => (
                    <div key={color}>
                        <input type="radio" id={color} name="color" value={color} checked={selectedColor === color} onChange={handleColorChange} />
                        <label htmlFor={color}>{color}</label>
                    </div>
                ))}
            </div>

            <h3>בחר טעם:</h3>
            <div>
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

            <button className={styles.orderButton}
                onClick={() =>
                console.log({ 
                product, selectedSize, selectedColor, selectedFlavor, quantity, notes })}
            >הזמנה</button>
        </div>
    );
}
