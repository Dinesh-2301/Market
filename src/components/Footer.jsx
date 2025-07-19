import React, { useState } from "react";
import { Mail, MapPin, Phone, ShoppingCart } from "lucide-react";
import CartModal from "./CartModal";
import "../styles/Footer.css";

const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-overlay">
        <div className="footer-column logo-column">
          <img src="/logo.svg" alt="Agrica" className="logo" />
          <p>
            Happen active county. Winding morning ambition shyness evident to poor.
            Because elderly new to the point to main success.
          </p>
          <div className="subscribe">
            <input type="email" placeholder="Your Email" />
            <button>GO</button>
          </div>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <ul>
            <li>About Us</li>
            <li>Meet Our Team</li>
            <li>News & Media</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>Volunteers</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Recent Posts</h3>
          <div className="post">
            <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/null/plant.png" alt="" />
            <div>
              <span>26 AUG, 2025</span>
              <p>Minuter him own clothes but observe as country.</p>
            </div>
          </div>
          <div className="post">
            <img src="https://img.icons8.com/color/48/null/orange.png" alt="" />
            <div>
              <span>08 DEC, 2025</span>
              <p>Overcame breeding point concerns has terminate</p>
            </div>
          </div>
        </div>

        <div className="footer-column">
          <h3>Contact Info</h3>
          <div className="contact-detail">
            <MapPin size={18} />
            <p>5919 Trussville Crossings Pkwy, Birmingham</p>
          </div>
          <div className="contact-detail">
            <Mail size={18} />
            <p>info@validtheme.com</p>
          </div>
          <div className="contact-detail">
            <Phone size={18} />
            <p>+123 34598768</p>
          </div>
        </div>
      </div>

      {/* Floating Cart Icon */}
      <div className="cart-floating-icon" onClick={() => setOpen(!open)}>
        <ShoppingCart size={24} />
      </div>

      {open && <CartModal onClose={() => setOpen(false)} />}
    </footer>
  );
};

export default Footer;
