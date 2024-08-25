import { sendEmail } from '@/server/functions/nodeMailer';

export async function POST(req) {
  const { type, orderDetails } = await req.json();
  
  const managerEmail = process.env.MAIL;
  let subject = '';
  let message = '';
  let recipientEmail = '';

  if (type === 'order') {
    // הזמנת מוצר
    subject = `הזמנה חדשה: ${orderDetails.productName}`;
    message = `
      <h1>הזמנה חדשה: ${orderDetails.productName}</h1>
      <div class="order-details" dir ="rtl">
        <div><strong>מוצר:</strong> ${orderDetails.productName}</div>
        <div><strong>גודל:</strong> ${orderDetails.size}</div>
        <div><strong>צבע:</strong> ${orderDetails.color}</div>
        <div><strong>טעם:</strong> ${orderDetails.flavor}</div>
        <div><strong>כמות:</strong> ${orderDetails.quantity}</div>
        <div><strong>הערות:</strong> ${orderDetails.notes}</div>
        <div><strong>שם הלקוח:</strong> ${orderDetails.customerName}</div>
        <div><strong>מספר טלפון:</strong> ${orderDetails.phoneNumber}</div>
      </div>`;
    recipientEmail = managerEmail; 
  } else if (type === 'contact') {
    // שליחת הודעה
    subject = `הודעה חדשה מ: ${orderDetails.name}`;
    message = `
      <h1>הודעה חדשה מ: ${orderDetails.name}</h1>
      <div class="contact-details"  dir ="rtl">
        <div><strong>שם:</strong> ${orderDetails.name}</div>
        <div><strong>אימייל:</strong> ${orderDetails.email}</div>
        <div><strong>טלפון:</strong> ${orderDetails.phone}</div>
        <div><strong>הודעה:</strong> ${orderDetails.message}</div>
      </div>`;
  } else {
    return new Response(JSON.stringify({ success: false, error: 'Invalid type' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    await sendEmail({ MemberMail: managerEmail, subject, message });
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
