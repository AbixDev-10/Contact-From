import { useState } from "react";
const API = "https://contact-from-sm74.onrender.com";

const configuredApiBaseUrl = import.meta.env.VITE_API_URL?.trim();
const apiBaseUrl = import.meta.env.DEV
  ? ""
  : configuredApiBaseUrl
    ? configuredApiBaseUrl.replace(/\/$/, "")
    : "";
const API_URL = `${apiBaseUrl}/api/contact`;

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState({
    type: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update the matching field whenever the user types in an input.
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({
      type: "",
      message: ""
    });

    try {
      fetch(`${API}/api/contact`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
});

      const text = await response.text();
      const result = text ? JSON.parse(text) : {};

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      setStatus({
        type: "success",
        message: result.message
      });
      setFormData(initialFormData);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message === "Failed to fetch"
            ? "Cannot connect to the server. Make sure the backend is running."
            : error.message || "Unable to send your message."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-card">
      <div className="contact-card__intro">
        <p className="eyebrow">Contact Form</p>
        <h2>Send a message</h2>
        <p>Fill out the form and I&apos;ll receive it in my inbox.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Enter the subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Write your message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {status.message ? (
          <p className={`form-message ${status.type}`}>{status.message}</p>
        ) : null}
      </form>
    </section>
  );
}

export default ContactForm;
