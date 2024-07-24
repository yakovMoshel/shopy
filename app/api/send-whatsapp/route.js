// import { NextResponse } from 'next/server';
// import twilio from 'twilio';

// const accountSid = process.env.TWILIO_ACCOUNT_SID; // החלף ב-Account SID שלך
// const authToken = process.env.TWILIO_AUTH_TOKEN; // החלף ב-Auth Token שלך
// const client = twilio(accountSid, authToken);

// export async function POST(req) {
//   try {
//     const { to, message } = await req.json();

//     // וודא שהמספר עם קידומת בינלאומית
//     const formattedTo = `+972${to.slice(1)}`; // משנה את המספר לפורמט הבינלאומי

//     console.log('Sending message to:', formattedTo);
//     console.log('Message content:', message);

//     const response = await client.messages.create({
//       from: 'whatsapp:+19382225504', // החלף במספר ה-WhatsApp שלך
//       to: `whatsapp:${formattedTo}`,
//       body: message,
//     });

//     console.log('Message sent successfully:', response);

//     return NextResponse.json({ success: true, response });
//   } catch (error) {
//     console.error('Error in API route:', error);
//     return NextResponse.json({ success: false, error: error.message });
//   }
// }
