import styled from "styled-components";

const Wrapper = styled.section`

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ========== About Section ========== */

.about {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: nowrap;
  padding: 20px 150px;
  gap: 80px;
  color: #ffffff;
  overflow-x: hidden;
  animation: fadeIn 1.5s ease;
}

/* Left photo wrapper */
.about-photo {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  margin-top: 80px;
}

.about-photo::before {
  content: "";
  position: absolute;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(199,125,255,0.4) 0%, rgba(6,6,25,1) 70%);
  filter: blur(30px);
  z-index: 0;
}

.about-photo img {
  width: 350px;
  height: 350px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.15);
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  box-shadow:
    0 0 20px rgba(199, 125, 255, 0.3),
    0 0 60px rgba(199, 125, 255, 0.1),
    0 0 100px rgba(199, 125, 255, 0.05);
  z-index: 1;
  animation: techyGlow 3s ease-in-out infinite;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.about-photo img:hover {
  transform: scale(1.06);
  box-shadow:
    0 0 30px rgba(199, 125, 255, 0.5),
    0 0 80px rgba(199, 125, 255, 0.3),
    0 0 120px rgba(199, 125, 255, 0.2);
}

@keyframes techyGlow {
  0% {
    box-shadow:
      0 0 20px rgba(199, 125, 255, 0.3),
      0 0 60px rgba(199, 125, 255, 0.1),
      0 0 100px rgba(199, 125, 255, 0.05);
  }
  50% {
    box-shadow:
      0 0 30px rgba(199, 125, 255, 0.4),
      0 0 80px rgba(199, 125, 255, 0.2),
      0 0 120px rgba(199, 125, 255, 0.1);
  }
  100% {
    box-shadow:
      0 0 20px rgba(199, 125, 255, 0.3),
      0 0 60px rgba(199, 125, 255, 0.1),
      0 0 100px rgba(199, 125, 255, 0.05);
  }
}



/* Right content */
.about-content {
  max-height: calc(100vh - 150px);
  overflow-y: auto;
  padding: 0 90px;
  padding-right: 20px;
  margin-top: 50px;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  animation: slideInRight 1.5s ease;
}

/* hide scrollbar for webkit browsers */
.about-content::-webkit-scrollbar {
  display: none;
}

.about-content h1 {
  font-size: 48px;
  margin-bottom: 20px;
  color: #c77dff;
  animation: fadeUp 1s ease;
}

.about-content p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #cccccc;
  animation: fadeIn 2s ease;
}

.about-content h2 {
  margin-top: 40px;
  font-size: 28px;
  color: #c77dff;
  animation: fadeUp 1s ease;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
}

.skills span {
  background: #3b82f6;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 14px;
  animation: fadeUp 0.8s ease;
}

.skills span:nth-child(1) { animation-delay: 0.3s; }
.skills span:nth-child(2) { animation-delay: 0.5s; }
.skills span:nth-child(3) { animation-delay: 0.7s; }
.skills span:nth-child(4) { animation-delay: 0.9s; }
.skills span:nth-child(5) { animation-delay: 1.1s; }
.skills span:nth-child(6) { animation-delay: 1.3s; }
.skills span:nth-child(7) { animation-delay: 1.5s; }
.skills span:nth-child(8) { animation-delay: 1.7s; }

.timeline {
  margin-top: 20px;
}

.timeline-item {
  margin-bottom: 20px;
  border-left: 3px solid #c77dff;
  padding-left: 15px;
  opacity: 0;
  animation: fadeUp 1s ease forwards;
}

.timeline-item:nth-child(1) { animation-delay: 0.4s; }
.timeline-item:nth-child(2) { animation-delay: 0.6s; }
.timeline-item:nth-child(3) { animation-delay: 0.8s; }

.timeline-item .year {
  font-weight: bold;
  color: #3b82f6;
}

.timeline-item p {
  margin: 5px 0 0 0;
  color: #cccccc;
}

.facts {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.fact-card {
  background: #1f1f3a;
  padding: 15px 20px;
  border-radius: 10px;
  color: #ffffff;
  font-size: 16px;
  min-width: 200px;
  text-align: center;
  transition: all 0.3s ease;
}

.fact-card:hover {
  background: #c77dff;
  color: #000000;
  box-shadow: 0 0 15px #c77dff;
  transform: scale(1.05);
}

@media (max-width: 600px) {
  .about {
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
    gap: 0;
  }

 .about-photo {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0;
  margin-top: 50px;
  margin-bottom: -50px;
}

.about-photo::before {
  content: "";
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(199,125,255,0.4) 0%, rgba(6,6,25,1) 70%);
  filter: blur(20px);
  z-index: 0;
}

.about-photo img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(6px);
  box-shadow:
    0 0 12px rgba(199, 125, 255, 0.3),
    0 0 40px rgba(199, 125, 255, 0.1),
    0 0 60px rgba(199, 125, 255, 0.05);
  z-index: 1;
  animation: techyGlow 3s ease-in-out infinite;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.about-photo img:hover {
  transform: scale(1.05);
  box-shadow:
    0 0 20px rgba(199, 125, 255, 0.5),
    0 0 50px rgba(199, 125, 255, 0.3),
    0 0 80px rgba(199, 125, 255, 0.2);
}
  .about-content {
    padding: 0;
    max-height: none;
    overflow: visible;
    animation: none;
  }

  .about-content h1 {
    font-size: 32px;
    text-align: center;
    margin-bottom: 15px;
  }

  .about-content p {
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
    margin-bottom: 25px;
  }

  .about-content h2 {
    font-size: 22px;
    text-align: center;
    margin-top: 30px;
  }

  .skills {
    justify-content: center;
    gap: 8px;
  }

  .skills span {
    font-size: 13px;
    padding: 6px 12px;
  }

  .timeline {
    margin-top: 15px;
  }

  .timeline-item {
    padding-left: 10px;
    margin-bottom: 15px;
    font-size: 14px;
  }

  .timeline-item .year {
    font-size: 14px;
  }

  .timeline-item p {
    font-size: 14px;
  }

  .facts {
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  .fact-card {
    min-width: unset;
    width: 80%;
    font-size: 14px;
    padding: 12px 15px;
  }
}


`
export default Wrapper