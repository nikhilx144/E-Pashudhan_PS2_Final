import React, { useState } from 'react';
import '../styles/Contact.css'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { name, email, message } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    // add code here to send the form data to your server or email
    setFormData({ name: '', email: '', message: '' });
  }

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={name} onChange={handleChange} required />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={email} onChange={handleChange} required />
        <label htmlFor="message">Message:</label>
        <textarea name="message" value={message} onChange={handleChange} required />
        <button className="subbtn" type="submit">Send</button>
      </form>
      <div className="info">
        <p>Email: epashudhan.query@gmail.com</p>
        <p>Phone: +91 55555-55555</p>
        <p>Address: 123 Main St, Hyderabad, Telangana, India</p>
      </div>
    </div>
  );
}

export default ContactUs;

