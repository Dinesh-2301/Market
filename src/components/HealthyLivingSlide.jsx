import React from "react";
import "../styles/HealthyLivingSlide.css";

const HealthyLivingSlide = () => {
  return (
    <section className="healthy-section">
      <h2 className="healthy-title">Fresh Food for Healthy Living</h2>
      <div className="healthy-grid">
        <div className="healthy-card">
          <img
            src="https://img.freepik.com/premium-vector/healthy-food-grocery_24640-71475.jpg?w=360"
            alt="Fresh Food"
          />
        </div>
        <div className="healthy-card">
          <img
            src="https://img.freepik.com/premium-vector/healthy-food-box_24640-74495.jpg"
            alt="Healthy Food Box"
          />
        </div>
      </div>
    </section>
  );
};

export default HealthyLivingSlide;
