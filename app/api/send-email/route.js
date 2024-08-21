import { sendEmail } from '@/server/functions/nodeMailer';

export async function POST(req) {
  const { orderDetails } = await req.json();
  const managerEmail = process.env.MAIL;
  const subject = `הזמנה חדשה: ${orderDetails.productName}`;
  const message = `
   <h1>הזמנה חדשה: ${orderDetails.productName}</h1>
    <div class="order-details">
        <div><strong>מוצר:</strong> ${orderDetails.productName}</div>
        <div><strong>גודל:</strong> ${orderDetails.size}</div>
        <div><strong>צבע:</strong> ${orderDetails.color}</div>
        <div><strong>טעם:</strong> ${orderDetails.flavor}</div>
        <div><strong>כמות:</strong> ${orderDetails.quantity}</div>
        <div><strong>הערות:</strong> ${orderDetails.notes}</div>
        <div><strong>שם הלקוח:</strong> ${orderDetails.customerName}</div>
        <div><strong>מספר טלפון:</strong> ${orderDetails.phoneNumber}</div>
</div>`
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