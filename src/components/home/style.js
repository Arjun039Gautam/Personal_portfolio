import styled from "styled-components";

const Wrapper = styled.div`
    color: white;
    margin-left: 30px;
    .container{
        display: flex;
        justify-content: space-evenly;
    }
    .home-header{
        font-size: 50px;
        margin-top: 200px;
    }
    .main-name{
        color: #cd5ff8;
        margin-left: 10px;
    }
    .image img{
        height: 400px;
        margin-top: 70px;
    }
    .description{
        margin: 200px;
        display: flex;
        justify-content: space-evenly;
    }
    .profile{
        background-color: white;
        border-radius: 50%;
        height: 300px;
        width: 300px;
        margin-top: 200px;
        border: 5px solid white;
        img{
            width: 100%;    /* Make the image fill the div horizontally */
            height: 100%;   /* Make the image fill the div vertically */
            object-fit: cover; 
            border-radius: 50%;
        }
    }
    .intro{
        text-align: left;
        font-size: 35px;
    }
    .heading{
        font-size: 50px;
        span{
            color: #cd5ff8;
        }
    }
    .social-link{
        text-align: center;
        font-size: 25px;
        margin-bottom: 100px;
        p{
            margin: 0;
            padding: 0;  
            span{
                color: #cd5ff8;
            }
        }
    }
    .social-heading{
        font-size: 40px;
        margin: 0;
        padding: 0;
    }
    .icon-div{
        height: 50px;
        width: 10%;
        margin: 20px auto;
        display: flex;
        justify-content: space-evenly;
        img{
            height: 40px;
        }
    }
    .textWrapper{
        font-size: 48px;
        white-space: nowrap;
        overflow: hidden;
        display: flex;
        align-items: center;
        color: #cd5ff8;
    }
    .cursor{
        display: inline-block;
        animation: blink 0.7s steps(2, start) infinite;
        color: #c77dff;

        @keyframes blink {
            0% {
            opacity: 1;
            }
            50% {
            opacity: 0;
            }
            100% {
            opacity: 1;
            }
        }
    }
`

export default Wrapper