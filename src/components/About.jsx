import React, { useEffect, useState } from "react";
import {
  Sprout,
  Wheat,
  Tractor,
  BarChart3,
  Handshake,
  Globe
} from "lucide-react";

import "../styles/About.css";

const About = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    let start = 1;
    const end = 25;
    const duration = 3000;
    const stepTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img
            src="https://png.pngtree.com/png-clipart/20230823/original/pngtree-farmer-milking-a-cow-at-daytime-agriculture-farmer-cow-vector-png-image_10624569.png"
            alt="Farmer milking cow"
          />
        </div>
        <div className="about-text">
          <h2>
            Agriculture &<br /> Organic Product Farm
          </h2>
          <p>
            There are many variations of passages of ipsum available but the majority
            have suffered alteration in some form by injected humor or random word
            which don't look even. Comparison new ham melancholy.
          </p>
          <div className="about-stats">
            <h3>{count}M</h3>
            <span>
              Growth Tonns <br /> of Harvest
            </span>
          </div>
        </div>
      </div>

      {/* About Boxes */}
      <div className="about-boxes">
        <div className="about-box orange-box">
          <div className="box-icon">
            <Sprout size={36} color="#28a745" />
          </div>
          <h3>100% Guaranteed Organic Product</h3>
          <p>
            Our organic certification ensures the highest quality standards for all
            our agricultural products with sustainable farming practices.
          </p>
        </div>

        <div className="about-box green-box">
          <div className="box-icon">
            <Wheat size={36} color="#ffc107" />
          </div>
          <h3>Top-Quality Healthy Foods Production</h3>
          <p>
            We maintain strict quality control throughout our production process to
            deliver nutritious and healthy food products.
          </p>
        </div>

        <div className="about-box orange-box">
          <div className="box-icon">
            <Tractor size={36} color="#ff5722" />
          </div>
          <h3>Modern Farming Technology</h3>
          <p>
            Innovative farming techniques help us maximize efficiency while maintaining
            environmental sustainability.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="about-features">
        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <Sprout size={28} />
            </div>
            <h4>Sustainable Agriculture</h4>
            <p>
              Environmentally friendly farming practices that preserve soil health and
              promote biodiversity.
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <BarChart3 size={28} />
            </div>
            <h4>Data-Driven Insights</h4>
            <p>
              Advanced analytics and monitoring systems to optimize crop management
              and improve outcomes.
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <Handshake size={28} />
            </div>
            <h4>Expert Support</h4>
            <p>
              Professional agricultural consultants providing guidance throughout the
              growing season.
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <Globe size={28} />
            </div>
            <h4>Global Distribution</h4>
            <p>
              Wide-reaching supply chain ensuring fresh products reach customers
              worldwide efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
