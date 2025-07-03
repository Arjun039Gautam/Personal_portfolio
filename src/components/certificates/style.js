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
      width: 210px;
      height: 150px;
    }
  }

  button.prev,
button.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  color: #fff;
  font-size: 32px;
  padding: 10px 15px;
  cursor: pointer;
  z-index: 3;
  border-radius: 50%;
  transition: background 0.3s ease;
}

button.prev:hover,
button.next:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

button.prev {
  left: 20px;
}

button.next {
  right: 20px;
}

@media (max-width: 768px) {
  button.prev,
  button.next {
    font-size: 24px;
    padding: 6px 10px;
    top: 75%;
  }
}

`;

export default Wrapper;
