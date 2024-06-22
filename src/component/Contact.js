import React from 'react';
import './Contact.css';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-section">
        <h1>Contact Us</h1>
        <p>We would love to hear from you! Please fill out this form and we will get in touch with you shortly.</p>
        <ContactForm />
        <div className="social-media">
          <h2>Follow Us</h2>
          <div className="social-media-icons">
            <a href="https://www.facebook.com/people/Harshad-Arts/100063792439770/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <img src='https://cdn-icons-png.flaticon.com/256/124/124010.png' alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/harshadartspune/?igsh=dDRzYjN3enQwMGxt" target="_blank" rel="noopener noreferrer">
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png' alt="Instagram" />
            </a>
            <a href="https://wa.me/9881339987" target="_blank" rel="noopener noreferrer">
              <img src='https://png.pngtree.com/png-clipart/20221019/original/pngtree-whatsapp-icon-png-image_8704827.png' alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
