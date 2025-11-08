

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const statusEl = document.getElementById("form-status");
  const button = form.querySelector("button");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    statusEl.textContent = "";
    button.disabled = true;
    button.textContent = "Sending...";

    const formData = new FormData(form);
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const phone = formData.get("phone")?.trim();
    const message = formData.get("message")?.trim();

    if (!name || !email || !message) {
      statusEl.textContent = "Please fill out name, email, and message.";
      button.disabled = false;
      button.textContent = "Send Message";
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_API_KEY}`,
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

      if (!res.ok) throw new Error("Failed to send email.");

      form.reset();
      statusEl.textContent = "Message sent! We’ll get back to you shortly.";
    } catch (err) {
      console.error(err);
      statusEl.textContent = "There was a problem sending your message. Please try again.";
    } finally {
      button.disabled = false;
      button.textContent = "Send Message";
    }
  });
});