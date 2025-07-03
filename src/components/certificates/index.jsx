import React, { useState, useEffect } from 'react';
import Wrapper from './style';
import cert1 from "../images/nascom certificate.png";
import cert2 from "../images/Arjun Gautam.png";
import cert3 from "../images/web dev certificate.png";
import cert4 from "../images/Hackathon.jpg";
import cert5 from "../images/java_certificate.png";
import cert6 from "../images/python_certificate.png";
import cert7 from "../images/gfg_participation.png";

const Certificates = () => {
  const certificates = [cert1, cert2, cert3, cert4, cert5, cert6, cert7];
  const [activeIndex, setActiveIndex] = useState(0);
  const total = certificates.length;
  const angleStep = 360 / total;

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 20000);
    return () => clearInterval(interval);
  }, [total]);

  // Manual control functions
  const goNext = () => setActiveIndex((prev) => (prev + 1) % total);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);

  return (
    <Wrapper>
      <h1>My <strong>Certificates</strong></h1>
      <p className="sub-heading">A showcase of my achievements</p>

      <div className="slider">
        {certificates.map((cert, index) => {
          const rotation = angleStep * (index - activeIndex);
          const normalizedRotation = ((rotation % 360) + 360) % 360;

          let scale = 0.6;
          let opacity = 0.3;
          if (normalizedRotation === 0) {
            scale = 1;
            opacity = 1;
          } else if (
            normalizedRotation === angleStep ||
            normalizedRotation === 360 - angleStep
          ) {
            scale = 0.8;
            opacity = 0.6;
          }

          return (
            <div
              className="slide"
              key={index}
              style={{
                transform: `rotateY(${rotation}deg) translateZ(600px) scale(${scale})`,
                opacity,
                zIndex: scale === 1 ? 2 : 1,
              }}
            >
              <img src={cert} alt={`Certificate ${index + 1}`} />
            </div>
          );
        })}

        <div className="button-wrapper">
        <button className="prev" onClick={goPrev}>⟨</button>
        <button className="next" onClick={goNext}>⟩</button>
      </div>
      </div>
    </Wrapper>
  );
};

export default Certificates;
