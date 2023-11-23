import nodemailer from "nodemailer";

type MailData = {
  service: string;
  email: string;
  subject: string;
  htmlBody: string;
};
export function sendMail(mailData: MailData) {
  const { service, email, subject, htmlBody } = mailData;
  const { APP_EMAIL, APP_PASSWORD } = process.env;

  const transporter = nodemailer.createTransport({
    service,
    auth: {
      user: APP_EMAIL,
      pass: APP_PASSWORD,
    },
  });

  transporter.sendMail({
    from: APP_EMAIL,
    to: email,
    subject,
    html: htmlBody,
  });
}
