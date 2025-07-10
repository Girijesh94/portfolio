import React from 'react';
import NeonGrid from './NeonGrid';
import '../styles/Contact.css';

function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-white overflow-hidden"
    >
      <NeonGrid />

      <h2 className="text-4xl md:text-5xl font-bold mb-10 z-10 text-purple-400 text-center">
        Contact Me
      </h2>

      <form
        action="mailto:your-email@example.com"
        method="POST"
        className="contact-form z-10"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
