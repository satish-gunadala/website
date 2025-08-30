import React from 'react';
import './styles/main.css';

function App() {
  return (
    <div>
      <header>
        <h1>Satish Cloth House</h1>
        <p>Discover Premium Fashion for Every Occasion</p>
        <a href="#shop" className="btn">Shop Now</a>
      </header>
      <nav>
        <a href="#shop" className="btn">Shop</a>
        <a href="#about" className="btn">About</a>
        <a href="#contact" className="btn">Contact</a>
      </nav>
      <section id="shop">
        <h2 className="section-title">Featured Collection</h2>
        <div className="gallery">
          <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" alt="Men's Wear" />
          <img src="https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=400&q=80" alt="Women's Wear" />
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" alt="Kids' Wear" />
        </div>
      </section>
      <section id="about">
        <h2 className="section-title">About Us</h2>
        <p>
          Satish Cloth House brings you the latest in fashion trends, offering a curated selection of premium clothing for men, women, and kids. Our mission is to provide quality, comfort, and style for every customer.
        </p>
      </section>
      <section id="contact">
        <h2 className="section-title">Contact & Visit Us</h2>
        <form className="contact-form" autoComplete="off">
          <input className="form-input" type="text" name="name" placeholder="Your Name" required />
          <input className="form-input" type="email" name="email" placeholder="Email" required />
          <textarea className="form-textarea" name="message" placeholder="Your Message" required />
          <button className="form-button" type="submit">Send</button>
        </form>
        <p className="contact-phone">
          📞 <strong>Call/WhatsApp:</strong> <a href="tel:+91-8919487406">+91-8919487406</a>
        </p>
      </section>
      <footer>
        <p>© 2025 Satish Cloth House. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;