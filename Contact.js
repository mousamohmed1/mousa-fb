import React, { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="contact">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">الاسم:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="email">البريد الإلكتروني:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="message">رسالة:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">إرسال</button>
      </form>
    </section>
  );
};

export default Contact;
