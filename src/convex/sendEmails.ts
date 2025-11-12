import { components } from "./_generated/api";
import { Resend } from "@convex-dev/resend";
import { internalMutation } from "./_generated/server";
import { v } from "convex/values";

export const resend: Resend = new Resend(components.resend, {
  testMode: false
});

export const sendContactNotification = internalMutation({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    await resend.sendEmail(ctx, {
      from: "noreply@yourdomain.com",
      to: "ziaul914191@gmail.com",
      subject: `New Contact Form Message from ${args.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${args.name}</p>
        <p><strong>Email:</strong> ${args.email}</p>
        <p><strong>Message:</strong></p>
        <p>${args.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Sent from your portfolio contact form</em></p>
      `,
    });
    return null;
  },
});
