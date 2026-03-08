"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendHoldTightEmail(clientEmail: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@stackcuts.com",
      to: clientEmail,
      subject: "🎉 Spot Secured! Your StackCuts invoice is being generated.",
      html: `
        <p>Hi there,</p>
        <p>This is an automated confirmation that your spot in our launch cohort has been successfully secured!</p>
        <p>I am manually generating your secure 50% deposit invoice right now. You will receive a separate email directly from Payoneer in the next 10 to 15 minutes with a secure link to pay via Credit Card or ACH.</p>
        <p>Once that deposit is cleared, you will receive immediate access to your client dashboard so we can start production on your Hybrid Ad.</p>
        <p>Keep an eye out for that Payoneer link shortly!</p>
        <p>Best,<br>Founder, StackCuts</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      throw new Error(error.message);
    }

    return { success: true, data };
  } catch (err) {
    console.error("Failed to send hold tight email:", err);
    throw err;
  }
}
