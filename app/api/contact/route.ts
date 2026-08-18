import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, email, message } = body;

    // Validate required fields
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields (First Name, Email, Message)" },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_EMAIL || "info@learninglabpk.com";
    const resendApiKey = process.env.RESEND_API_KEY;

    const emailSubject = `New Contact Form Enquiry from ${firstName} ${lastName || ""}`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; color: #0c3746; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; rounded-lg: 12px; padding: 24px;">
        <h2 style="color: #5b4bbb; margin-top: 0;">New Website Enquiry</h2>
        <p>You have received a new enquiry from the Learning Lab website contact form.</p>
        
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        
        <table style="width: 100%; text-align: left; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 120px;">Full Name:</td>
            <td style="padding: 8px 0;">${firstName} ${lastName || ""}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
            <td style="padding: 8px 0;">${phone || "Not provided"}</td>
          </tr>
        </table>
        
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
        
        <h4 style="margin-bottom: 8px; color: #0c3746;">Message / Details:</h4>
        <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</div>
        
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0 16px 0;" />
        <p style="font-size: 12px; color: #94a3b8; margin: 0;">Sent via Learning Lab Website Contact Form</p>
      </div>
    `;

    // If Resend API Key is available in environment variables, dispatch email via Resend API
    if (resendApiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Learning Lab Website <onboarding@resend.dev>",
          to: recipientEmail,
          subject: emailSubject,
          html: emailHtml,
          reply_to: email,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Resend API error:", errorData);
      }
    } else {
      // Log submission for local / preview verification
      console.log("=== NEW ENQUIRY RECEIVED ===");
      console.log(`To: ${recipientEmail}`);
      console.log(`Subject: ${emailSubject}`);
      console.log(`From: ${firstName} ${lastName} (${email}, ${phone})`);
      console.log(`Message: ${message}`);
      console.log("===========================");
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully",
    });
  } catch (error) {
    console.error("Contact API submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit enquiry. Please try again later." },
      { status: 500 }
    );
  }
}
