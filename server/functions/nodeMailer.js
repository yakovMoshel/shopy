const nodemailer = require("nodemailer");

const APP_PASSWORD = process.env.APP_PASSWORD;
const MAIL = process.env.MAIL;

export const sendEmail = async ({ MemberMail, subject = "", message = "" }) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,

        auth: {
            user: MAIL,
            pass: APP_PASSWORD
        },
    });

    const mailOptions = {
        from: MAIL,
        to: MemberMail,
        subject: subject,
        text: message,
        html: message
    };

    try {
        const info = await transporter.sendMail(mailOptions);
    } catch (error) {
        throw error;
    }
};