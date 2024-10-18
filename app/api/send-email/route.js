import { sendEmail } from '@/server/functions/nodeMailer';

export async function POST(req) {
  try {
    const { type, orderDetails } = await req.json();
  
    const managerEmail = process.env.MAIL;
    let subject = '';
    let message = '';

    if (type === 'order') {
      subject = `הזמנה חדשה: ${orderDetails.productName}`;
      message = `
        <h1>הזמנה חדשה: ${orderDetails.productName}</h1>
        <div class="order-details" dir="rtl">
          <div><strong>מוצר:</strong> ${orderDetails.productName}</div>
          <div><strong>גודל:</strong> ${orderDetails.size}</div>
          <div><strong>צבע:</strong> ${orderDetails.color}</div>
          <div><strong>טעם:</strong> ${orderDetails.flavor}</div>
          <div><strong>מילוי:</strong> ${orderDetails.filling}</div>
          <div><strong>ללא גלוטן:</strong> ${orderDetails.glutenFree}</div>
          <div><strong>ללא חלב:</strong> ${orderDetails.notDairy}</div>
          <div><strong>הערות:</strong> ${orderDetails.notes || 'אין הערות'}</div>
          <div><strong>שם הלקוח:</strong> ${orderDetails.customerName}</div>
          <div><strong>מספר טלפון:</strong> ${orderDetails.phoneNumber}</div>
        </div>`;
    } else if (type === 'contact') {
      subject = `הודעה חדשה מ: ${orderDetails.name}`;
      message = `
        <h1>הודעה חדשה מ: ${orderDetails.name}</h1>
        <div class="contact-details" dir="rtl">
          <div><strong>שם:</strong> ${orderDetails.name}</div>
          <div><strong>אימייל:</strong> ${orderDetails.email}</div>
          <div><strong>טלפון:</strong> ${orderDetails.phone}</div>
          <div><strong>הודעה:</strong> ${orderDetails.message}</div>
        </div>`;
    } else {
      console.error('Invalid type:', type);
      return new Response(JSON.stringify({ success: false, error: 'Invalid type' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await sendEmail({ MemberMail: managerEmail, subject, message });
    console.log('Email sent successfully');
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}