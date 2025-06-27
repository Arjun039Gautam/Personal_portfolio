import styled from "styled-components";

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
  }

  .hamburger {
    display: none;
    flex-direction: column;
    gap: 4px;
    cursor: pointer;
  }

  .hamburger span {
    width: 25px;
    height: 3px;
    background-color: white;
    border-radius: 2px;
  }

  .word {
    display: flex;
    width: 650PX;
    justify-content: space-around;
    list-style: none;
    a{
      font-size: 20px;
    }
  }

  .icon {
    display: flex;
    gap: 20px;
    list-style: none;
  }

  img {
    height: 40px;
  }

  nav ul li a {
    text-decoration: none;
    color: white;
    transition: color 0.3s;
  }

  nav ul li a:hover {
    color: #8a2be2;
  }

  nav ul li a.active {
    color: #8a2be2;
    font-weight: bold;
  }

  nav ul li:hover,
  nav ul li a.active {
    transform: scale(1.05);
  }

  /* Mobile Styles */
  @media screen and (max-width: 600px) {
    .hamburger {
      display: flex;
    }

    .word {
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      background-color: #1a1a40;
      flex-direction: column;
      align-items: center;
      padding: 10px 0;
      display: none;
      z-index: 998;
    }

    .word.show {
      display: flex;
      width: 40vw;
      height: 200px;
    }

    nav ul li a {
      padding: 10px;
      font-size: 16px;
    }

    .icon {
      display: flex; /* KEEP social icons always visible */
      gap: 10px;
    }
  }
`;

export default Wrapper;
