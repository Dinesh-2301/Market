import React from "react";
import "../styles/ExploreProjectsSlider.css";

const projectImages = [
  {
    url: "https://www.shutterstock.com/shutterstock/videos/1105254803/thumb/4.jpg?ip=x480",
    label: "Fruit",
    title: "Healthy Food"
  },
  {
    url: "https://images.unsplash.com/photo-1483871788521-4f224a86e166?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFncmljdWx0dXJlfGVufDB8fDB8fHww",
    label: "Organic",
    title: "Cow Milk"
  },
  {
    url: "https://kj1bcdn.b-cdn.net/media/77789/kerala.jpg",
    label: "Local",
    title: "Kerala Farming"
  },
  {
    url: "https://i.pinimg.com/736x/a6/de/c8/a6dec8a11bdedd88cb4f4e7e12c0c1c3.jpg",
    label: "Grains",
    title: "Wheat Fields"
  },
  {
    url: "https://m.media-amazon.com/images/I/71ZAbYJGbwL._UF1000,1000_QL80_.jpg",
    label: "Organic",
    title: "Clean Greens"
  },
  {
    url: "https://t3.ftcdn.net/jpg/13/18/46/68/360_F_1318466863_ZqHhCyGwpWuloM5NiPJtHIuMLldILZzS.jpg",
    label: "Harvest",
    title: "Golden Crop"
  },
  {
    url: "https://www.foodie-project.eu/wp-content/uploads/2020/12/salad-crop-hydroponics-system-farm-agriculture_shutterstock_1162258756-1024x576.jpg",
    label: "Hydroponic",
    title: "Modern Farming"
  }
];

const ExploreProjectsSlider = () => {
  return (
    <section className="explore-section">
      <h2 className="explore-title">Explore Projects</h2>
      <div className="project-scroll">
        {projectImages.map((item, index) => (
          <div className="project-card" key={index}>
            <img src={item.url} alt={item.title} className="project-img" />
            <div className="project-info">
              <span className="project-label">{item.label}</span>
              <h3 className="project-title">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreProjectsSlider;
