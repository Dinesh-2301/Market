import React, { useEffect, useState } from 'react';
import "../styles/HeroSection.css";

const backgrounds = [
  'https://plus.unsplash.com/premium_photo-1661962692059-55d5a4319814?fm=jpg&q=60&w=3000',
  'https://kj1bcdn.b-cdn.net//media/34418/crops.png',
  'https://agricultureguruji.com/wp-content/uploads/2020/05/Benefits-Of-Organic-Farming.jpg',
];

const HeroSection = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 2000); // every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}
    >
      <div className="hero-content">
        <h1>Homemade <br /> Organic Product</h1>
        <p>
          Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
