import styled from "styled-components";

const Wrapper = styled.section`
    color: white;
    margin: 200px 100px;
    .container1{
        display: flex;
        justify-content: space-evenly;

    }
    .heading{
        font-size: 50px;
        text-align: center;
    }
    .image{
        img{
            height: 550px;
            margin: 90px 0;
        }
    }
    .content{
        font-size: 35px;
        span{
            color: #cd5ff8;
        }
    }
    ul li{
        list-style-type: none;
        font-size: 35px;
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
            font-size: 45px;
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
        div{
            border: white 2px solid;
            padding: 20px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        div:hover{
            border: #cd5ff8 2px solid;
            transform: scale(1.1); /* Increases size */
            box-shadow: 0 0 15px #cd5ff8;
        }
    }
`
export default Wrapper