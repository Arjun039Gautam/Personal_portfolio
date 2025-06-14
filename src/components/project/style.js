import styled from "styled-components";

const Wrapper = styled.section`
    margin-top: 100px;
    color: white;
    h1{
        text-align: center;
        font-size: 25px;
        margin-bottom: 0;
        strong{
            color: #cd5ff8;
        }       
    }

    .sub-heading{
        text-align: center;
        font-size: 18px;
        margin-top: 0;
    }
    .main-container{
        display: flex;
        padding: 30px;
        flex-wrap: wrap;
        justify-content: space-around;
        div{
            border: solid white 2px;
            box-shadow: 0 4px 4px 0 #cd5ff8, 0 4px 4px 0 #cd5ff8;
            padding: 20px;
            text-align: center;
            align-items: center;
            /* height: 300px; */
            width: 300px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            margin-bottom: 80px;
            p{
                font-size: 12px;
            }
        }
        div:hover{
            border: #cd5ff8 2px solid;
            transform: scale(1.1); /* Increases size */
            box-shadow: 0 0 15px white;
        }
    }
    .parkify{
        height: 180px;
        margin-top: -60px;
        margin-bottom: -45px;
    }
    .mayoor{
        height: 120px;
        margin-top: -10px;
        margin-bottom: -10px;
    }
    img{
        height: 80px;
    }

    
    
`
export default Wrapper