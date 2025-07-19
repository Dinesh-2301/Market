import React from 'react';
import "../styles/OrganicFoodSection.css";

const OrganicFoodSection = () => {
  return (
    <div className="section-container">
      <h2 className="section-header">What We Do</h2>
      <h1 className="section-title">
        Currently we are <br /> selling organic food
      </h1>

      <div className="grid-container">
        {/* Agriculture Card */}
        <div className="card">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/047/012/717/small/a-golden-cornfield-with-a-vintage-tractor-in-the-foreground-showcasing-rural-harvest-charm-photo.jpg"
            alt="Tractor"
            className="card-image"
          />
          <h3 className="card-title">AGRICULTURE</h3>
          <h4 className="card-subtitle">PRODUCTS</h4>
          <p className="card-description">
            Seeing rather her you not esteem men settle genius excuse. Deal say over means age from. Comparison new melancholy son devonshire to the dispatched.
          </p>
          <div className="card-arrow">➜</div>
        </div>

        {/* Fresh Vegetables Card */}
        <div className="card">
          <img
            src="https://www.agrifarming.in/wp-content/uploads/2020/01/Comp3-9.jpg"
            alt="Tomatoes"
            className="card-image"
          />
          <h3 className="card-title">FRESH</h3>
          <h4 className="card-subtitle">VEGETABLES</h4>
          <p className="card-description">
            Perming rather her you not esteem men settle genius excuse. Deal say over means age from. Comparison new melancholy son devonshire to the dispatched.
          </p>
          <div className="card-arrow">➜</div>
        </div>

        {/* Dairy Products Card */}
        <div className="card">
          <img
            src="https://images.stockcake.com/public/8/0/8/80889a43-2596-4d0b-af5b-45e6b362d3d7_large/cow-with-woman-stockcake.jpg"
            alt="Cow"
            className="card-image"
          />
          <h3 className="card-title">DAIRY</h3>
          <h4 className="card-subtitle">PRODUCTS</h4>
          <p className="card-description">
            Seeing rather her you not esteem men settle genius excuse. Deal say over means age from. Comparison new melancholy son devonshire to the dispatched.
          </p>
          <div className="card-arrow">➜</div>
        </div>
      </div>
    </div>
  );
};

export default OrganicFoodSection;
