import React, { useEffect, useRef, useState } from "react";
import "../styles/AgricaSection.css";

const useInView = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
};

const AnimatedCircle = ({ value, label, color }) => {
  const ref = useRef();
  const isVisible = useInView(ref);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible && count < value) {
      const duration = 1500;
      const start = performance.now();

      const animate = (time) => {
        const progress = Math.min((time - start) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easedProgress * value));
        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    }
  }, [isVisible]);

  return (
    <div className="circle-chart" ref={ref} title={`${value}%`}> {/* Tooltip */}
      <div className="circle" style={{ borderColor: color }}>
        <span>{count}%</span>
      </div>
      <p>{label}</p>
    </div>
  );
};

const AgricaSection = () => {
  return (
    <div className="agrica-container">
      <div className="agrica-left">
        <img
          src="https://media.istockphoto.com/id/153737841/photo/rice.jpg?s=612x612&w=0&k=20&c=lfO7iLT0UsDDzra0uBOsN1rvr2d5OEtrG2uwbts33_c="
          alt="Grains"
          className="agrica-image"
        />
      </div>

      <div className="agrica-right">
        <div className="agrica-text">
          <h2>Pure & Organic</h2>
          <p>
            Continued at up to zealously necessary breakfast. Surrounded sir
            motionless she end literature. Gay direction neglected but supported
            yet her.
          </p>

          <h3>Always Fresh</h3>
          <p>
            Continued at up to zealously necessary breakfast. Surrounded sir
            motionless she end literature. Gay direction neglected but supported
            yet her.
          </p>
        </div>

        <div className="agrica-charts">
          <AnimatedCircle value={83} label="Organic Solutions" color="#28a745" />
          <AnimatedCircle value={60} label="Quality Agriculture" color="#ffc107" />
        </div>
      </div>
    </div>
  );
};

export default AgricaSection;
