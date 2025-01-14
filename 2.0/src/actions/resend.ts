"use server";

import { Resend } from "resend";

const MAIL_FORMAT = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export type EmailResponse = {
  ok: boolean;
  message: string;
};

const validateData = (formData: { email: string, name: string, message: string }): EmailResponse => {

  if(!formData.name || !formData.email || !formData.message)
    return {
      ok: false,
      message: "Hey you missed a field!",
    };

  if(!formData.email.match(MAIL_FORMAT))
    return {
      ok: false,
      message: "That is not an email...",
    };

  return {
    ok: true,
    message: "Formulärdata validerad!",
  };
}

const resend = new Resend(process.env.RESEND_API_KEY!);

export const sendEmail = async (data: FormData): Promise<EmailResponse> => {

  // Get form data
  const formData = {
    name: data.get("name") as string,
    email: data.get("email") as string,
    message: data.get("message") as string,
  };

  const validateRes = validateData(formData);

  // console.log(validateRes);

  if(!validateRes.ok) {
    return validateRes;
  }

  try {
    const res = await resend.emails.send({
      from: "message@geweb.se",
      to: process.env.TO_EMAIL || "",
      subject: `Nytt medddelande på gustavevensson.com från ${formData.name}!`,
      html: `
        <h3>${formData.name} skickade ett meddelande till dig!</h3>

        <p>${formData.message}</p>
        
        <p>Kontakta ${formData.name} på: ${formData.email}</p>
      `,
    });

    if (res.error)
      return {
        ok: false,
        message: res.error.message,
      };

    return {
      ok: true,
      message: "Wohooo! Thank you, I will get back to you soon!",
    };
  } catch (error: unknown) {
    return {
      ok: false,
      message: JSON.stringify(error),
    };
  }
};