import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiGithub, FiMail, FiLinkedin, FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";
import CardHeader from "../components/CardHeader";
import { socials, emailConfig } from "../data/content";
import "./Contact.css";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const isConfigured =
    emailConfig.serviceId !== "YOUR_SERVICE_ID" &&
    emailConfig.templateId !== "YOUR_TEMPLATE_ID" &&
    emailConfig.publicKey !== "YOUR_PUBLIC_KEY";

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isConfigured) {
      const body = encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`);
      window.location.href = `mailto:${socials.email}?subject=${encodeURIComponent(
        form.subject || "Portfolio contact"
      )}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        emailConfig.publicKey
      );
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <motion.div
      id="contact"
      className="glass bento-card card-contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
    >
      <CardHeader number="05" label="Get in touch" title="Let's talk" />

      <div className="contact-quick-links">
        <a href={`mailto:${socials.email}`}>
          <FiMail /> {socials.email}
        </a>
        <a href={socials.github} target="_blank" rel="noopener noreferrer">
          <FiGithub /> GitHub
        </a>
        {socials.linkedin && (
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
            <FiLinkedin /> LinkedIn
          </a>
        )}
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          name="name"
          type="text"
          placeholder="Name"
          required
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
        />
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          required
          value={form.subject}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={3}
          required
          value={form.message}
          onChange={handleChange}
        />

        <button type="submit" className="btn btn-primary contact-submit" disabled={status === "sending"}>
          {status === "sending" ? (
            "Sending..."
          ) : status === "success" ? (
            <>
              <FiCheck /> Sent
            </>
          ) : (
            <>
              <FiSend /> Send
            </>
          )}
        </button>

        {status === "success" && (
          <p className="contact-status contact-status-success">
            <FiCheck /> Message sent — thanks for reaching out!
          </p>
        )}
        {status === "error" && (
          <p className="contact-status contact-status-error">
            <FiAlertCircle /> Something went wrong. Email me directly instead.
          </p>
        )}
        {!isConfigured && (
          <p className="contact-note">Not wired to EmailJS yet — this opens your email app.</p>
        )}
      </form>
    </motion.div>
  );
}
