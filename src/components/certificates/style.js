import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 80px;
  padding: 0;
  width: 100vw;
  height: 100vh;
  color: #ffffff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 48px;
    font-weight: 700;
    margin: 30px 0 0px 0;

    strong {
      color: #cd5ff8;
    }
  }

  .sub-heading {
    font-size: 18px;
    margin-bottom: 20px;
    color: #cccccc;
    text-align: center;
  }

  .slider {
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1500px;
    transform-style: preserve-3d;
    margin-bottom: 60px;
  }

  .slide {
    position: absolute;
    transform-origin: center center;
    transform-style: preserve-3d;
    transition: transform 0.6s ease, opacity 0.6s ease;
  }

  .slide img {
    width: 400px;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 32px;
    }

    .sub-heading {
      font-size: 14px;
      margin-bottom: 10px;
    }

    .slide img {
      width: 230px;
      height: 170px;
    }
  }
`;

export default Wrapper;
