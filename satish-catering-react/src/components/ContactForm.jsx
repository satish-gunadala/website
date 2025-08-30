import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to an API
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact & Booking</h2>
      <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
        <input
          className="form-input"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="form-input"
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="Email (optional)"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          className="form-textarea"
          name="message"
          placeholder="Event details: date, type, guests, location..."
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button className="form-button" type="submit">Submit</button>
      </form>
      <p className="contact-phone">
        📞 <strong>Call/WhatsApp:</strong> <a href="tel:+91-8919487406">+91-8919487406</a>
      </p>
    </section>
  );
};

export default ContactForm;