// /pages/api/auth/signin.js
import { NextResponse } from 'next/server';
import { verifyUser } from '@/server/functions/auth'; // ייבוא פונקציה לאימות המשתמש

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    
    // פונקציה לאימות פרטי המשתמש
    const user = await verifyUser(email, password);
    
    if (user) {
      // כאן תוכל ליצור סשן או JWT ולשלוח אותו ללקוח
      return NextResponse.json({ success: true, message: 'Login successful' });
    } else {
      return NextResponse.json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' });
  }
}
