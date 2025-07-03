import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 10px;
  padding: 60px 20px;
  color: #ffffff;
  font-family: 'Poppins', 'Segoe UI', sans-serif;

  h1 {
    text-align: center;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 10px;
    animation: fadeUp 1s ease;

    strong {
      color: #cd5ff8;
    }
  }

  .sub-heading {
    text-align: center;
    font-size: 18px;
    margin-top: 5px;
    margin-bottom: 40px;
    color: #cccccc;
    animation: fadeUp 1.5s ease;
  }

  .main-container {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    padding: 30px;
  }

  .main-container > div {
    position: relative;
    background: linear-gradient(145deg, #1f1f3a 0%, #2d2d5a 100%);
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    border: 2px solid rgba(205, 95, 248, 0.1);
    padding: 20px;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.4s ease;
    animation: fadeUp 1.5s ease;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 320px;
    box-sizing: border-box;
    backdrop-filter: blur(6px);
  }

  .main-container > div::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(205, 95, 248, 0.2) 0%, transparent 60%);
    transform: rotate(25deg);
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: 0;
    pointer-events: none;
  }

  .main-container > div:hover::before {
    opacity: 1;
  }

  .main-container > div:hover {
    transform: scale(1.06);
    box-shadow: 0 0 25px #cd5ff8;
    border-color: #cd5ff8;
    z-index: 1;
  }

  .main-container > div p {
    font-size: 14px;
    color: #cccccc;
    margin: 10px 0;
    line-height: 1.6;
    position: relative;
    z-index: 2;
  }

  .main-container > div p strong {
    font-size: 16px;
    color: #cd5ff8;
  }

  .main-container img {
    height: 80px;
    margin-bottom: 15px;
    transition: transform 0.4s ease;
    object-fit: contain;
    position: relative;
    z-index: 2;
    filter: drop-shadow(0 0 10px rgba(205, 95, 248, 0.3));
  }

  .main-container > div:hover img {
    transform: scale(1.1);
  }

  .main-container img.parkify {
    height: 200px;
    margin-top: -60px;
    margin-bottom: -50px;
  }

  .main-container img.mayoor {
    height: 120px;
    margin-top: -10px;
    margin-bottom: -10px;
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

  @media (max-width: 1024px) {
    .main-container {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 32px;
    }

    .sub-heading {
      font-size: 16px;
    }

    .main-container {
      grid-template-columns: 1fr;
      gap: 20px;
      padding: 10px;
    }
  }

  .github-link {
  display: inline-block;
  margin-top: 10px;
  color: #cd5ff8;
  font-weight: 500;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.github-link:hover {
  color: #ffffff;
  text-decoration: underline;
}

`;

export default Wrapper;
