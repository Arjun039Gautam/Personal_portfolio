import styled from "styled-components";

const Wrapper = styled.section`
    color: white;
    margin-top: 100px;
    .container1{
        display: flex;
        justify-content: space-evenly;

    }
    .heading{
        font-size: 25px;
        text-align: center;
    }
    .image{
        img{
            height: 350px;
            margin: 90px 0;
        }
    }
    .content{
        font-size: 22px;
        span{
            color: #cd5ff8;
        }
    }
    ul li{
        list-style-type: none;
        font-size: 22px;
        display: flex;
        gap: 20px;
    }
    .container2{
        display: flex;
        flex-direction: column; /* Column Layout */
        justify-content: center; /* Horizontal Center */
        align-items: center;           /* Full Screen Height */
        text-align: center; 
        h1{
            font-size: 25px;
            margin-bottom: 50px;
            strong{
                color: #cd5ff8; 
            }
        }
    }
    .main-container{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 100px;
        div{
            border: white 1px solid;
            padding: 10px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        div:hover{
            border: #cd5ff8 2px solid;
            transform: scale(1.1); /* Increases size */
            box-shadow: 0 0 15px #cd5ff8;
        }
    }
    
   @media screen and (max-width: 600px) {
  .container1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding-inline: 16px;
    box-sizing: border-box;
    text-align: center;
  }

  .description {
    font-size: 14px;
    width: 100%;
  }

  .heading {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .content {
    font-size: 14px;
    line-height: 1.6;
    margin: 0 auto;
  }

  ul {
    padding: 0;
    list-style: none;
    margin: 10px 0 0 0;
  }

  ul li {
    font-size: 14px;
    display: flex;
    align-items: center;
    margin-bottom: 6px;
    margin-left: 15px;
  }

  ul li img {
    height: 14px;
    margin-right: 8px;
  }

  .image {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .image img {
    width: 90%;
    max-width: 260px;
    height: auto;
  }

  .container2 {
    margin-top: 40px;
    padding-inline: 16px;
    box-sizing: border-box;
    text-align: center;
  }

  .container2 h1 {
    font-size: 20px;
    margin-bottom: 20px;
  }

  .main-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
  }

  .main-container div {
    width: 60px;
    height: 60px;
  }

  .main-container img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}


`
export default Wrapper