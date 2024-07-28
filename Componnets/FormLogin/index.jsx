"use client"
import React, { useState } from 'react'
import styles from './style.module.scss'
import { useRouter } from 'next/navigation';

export default function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  
    const data = await res.json();
    if (data.success) {
      // שמירת טוקן הסשן ב-LocalStorage
      localStorage.setItem('sessionToken', data.sessionToken);
      router.push('/admin');
      console.log('Login successful');
    } else {
      setErrorMessage(data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>Email:
        <input type="email" value={email}
         onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>Password:
        <input type="password" value={password}
         onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <button type="submit">התחבר</button>
    </form>
  );
};

