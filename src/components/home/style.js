import styled from "styled-components";

const Wrapper = styled.div`

/* Hero Section */
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 60px;
  flex-wrap: wrap;
  color: #ffffff;
  gap: 150px;
}

.hero-text {
  animation: fadeIn 1.5s ease;
}

.hero-text h1 {
  font-size: 72px;
  font-weight: 700;
}

.hero-text h2 {
  margin-top: -15px;
  color: rgb(203, 195, 195);
}

.hero-text h1 span {
  color: #c77dff;
}

.buttons {
  margin-top: 30px;
}

.btn {
  display: inline-block;
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn.primary {
  border: 2px solid #3b82f6;
  color: #3b82f6;
  background: none;
}

.btn.primary:hover {
  background: #3b82f6;
  color: #ffffff;
}

.btn.outline {
  border: 2px solid #c77dff;
  color: #c77dff;
  background: none;
  margin-left: 20px;
}

.btn.outline:hover {
  background: #c77dff;
  color: #ffffff;
}

.hero-image img {
  height: 655px;
  width: 100%;
  border-radius: 0;
  border: none;
  box-shadow: none;
  animation: none;
}

/* Keyframes for mobile glow */
@keyframes techyGlow {
  0% {
    box-shadow: 0 0 20px rgba(199, 125, 255, 0.3),
                0 0 60px rgba(199, 125, 255, 0.1),
                0 0 100px rgba(199, 125, 255, 0.05);
  }
  50% {
    box-shadow: 0 0 30px rgba(199, 125, 255, 0.4),
                0 0 80px rgba(199, 125, 255, 0.2),
                0 0 120px rgba(199, 125, 255, 0.1);
  }
  100% {
    box-shadow: 0 0 20px rgba(199, 125, 255, 0.3),
                0 0 60px rgba(199, 125, 255, 0.1),
                0 0 100px rgba(199, 125, 255, 0.05);
  }
}

/* Mobile styles */
@media (max-width: 600px) {
  .hero {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 30px 10px;
    gap: 40px;
    margin-top: 60px;
  }

  .hero-image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
  }

  .hero-image::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 240px;
    height: 240px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(199, 125, 255, 0.4) 0%, rgba(6, 6, 25, 1) 70%);
    filter: blur(25px);
    z-index: 0;
  }

  .hero-image img {
    height: 250px;
    width: 250px;
    border-radius: 50%;
    object-fit: cover;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(8px);
    animation: techyGlow 3s ease-in-out infinite;
  }

  .hero-text h1 {
    font-size: 36px;
    line-height: 1.2;
  }

  .hero-text h2 {
    font-size: 18px;
    margin-top: 10px;
    color: #ccc;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .btn {
    width: 90%;
    font-size: 15px;
    padding: 12px;
  }

  .btn.outline {
    margin-left: 0;
  }
}
`;

export default Wrapper;
