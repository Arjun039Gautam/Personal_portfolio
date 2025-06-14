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
    }
    
    nav ul {
        width: 100%;
        display: flex;
        justify-content: space-around;
        list-style: none;
        font-size: 30px;
        margin-left: 200px;
    }

    nav ul li {
        list-style: none;
        transition: transform 0.3s, font-size 0.3s;
    }

    /* Hover and active effect */
    nav ul li:hover, 
    nav ul li a.active {
        transform: scale(1.2); /* Increase size */
        font-size: 35px;       /* Optional: larger font size */
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
        height: 100px;
        padding: 2px 10px;
        margin: 2px 10px;
    }
`

export default Wrapper;
