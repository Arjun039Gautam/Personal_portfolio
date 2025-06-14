import styled from "styled-components";

const Wrapper = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    text-decoration: none;
    
    nav {
        display: flex;
        backdrop-filter: blur(10px);
        background-color: rgba(255, 255, 255, 0.1);
        color: white;
        z-index: 999;
        height: 80px;
    }
    
    nav ul {
        width: 100%;
        display: flex;
        justify-content: space-around;
        list-style: none;
        font-size: 20px;
        margin-left: 200px;
    }

    /* Hover and active effect */
    nav ul li:hover, 
    nav ul li a.active {
        transform: scale(1.2); /* Increase size */
        font-size: 22px;       /* Optional: larger font size */
    }

    nav ul li a, nav ul li Link {
        text-decoration: none; 
        color: white;
        transition: color 0.3s;
    }

    nav ul li a:hover, nav ul li Link:hover {
        color: #8a2be2;         
    }

    nav ul li a.active {
        color: #8a2be2;      
        border-radius: 5px;
    }

    img {
        height: 70px;
        padding: 2px 10px;
        margin: 2px 200px 2px 10px;
    }
    @media screen and (max-width: 600px) {
  nav {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    padding: 0 10px;
  }

  nav img {
    height: 50px;
    margin: 0;
  }

  nav ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* flex-wrap: wrap; */
    gap: 10px;
    font-size: 14px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  nav ul li {
    margin: 0 5px;
  }

  nav ul li a {
    color: white;
    text-decoration: none;
    padding: 5px;
  }

  nav ul li a.active {
    color: #8a2be2;
    font-weight: bold;
  }

  nav ul li:hover,
  nav ul li a.active {
    transform: scale(1.05);
    font-size: 15px;
  }

  .nav-link {
    transition: color 0.3s;
  }

  nav ul li a:hover {
    color: #8a2be2;
  }
}

`

export default Wrapper;
