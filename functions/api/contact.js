export async function onRequestPost(context) {
    const { request, env } = context;
  
    try {
      const { name, email, phone, message } = await request.json();
  
      const result = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Broadhead Buddy <james@broadhead-buddy.com>",
          to: ["james@broadhead-buddy.com"],
          reply_to: email,
          subject: `New Inquiry from ${name}`,
          html: `
            <h2>New Inquiry from Broadhead Buddy site</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          `,
        }),
      });
  
      const data = await result.json();
  
      return new Response(JSON.stringify({ ok: true, data }), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Resend API error:", error);
      return new Response(JSON.stringify({ ok: false, error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }