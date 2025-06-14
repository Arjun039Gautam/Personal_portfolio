import styled from "styled-components";

const Wrapper = styled.section`
    margin: 200px 100px;
    color: white;
    h1{
        text-align: center;
        font-size: 50px;
        margin-bottom: 0;
        strong{
            color: #cd5ff8;
        }       
    }

    .sub-heading{
        text-align: center;
        font-size: 25px;
        margin-top: 0;
    }
    .main-container{
        display: flex;
        padding: 30px;
        flex-wrap: wrap;
        div{
            border: solid white 2px;
            box-shadow: 0 4px 8px 0 #cd5ff8, 0 6px 20px 0 #cd5ff8;
            padding: 20px;
            text-align: center;
            align-items: center;
            height: 400px;
            width: 300px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            margin-bottom: 40px;
            margin-right: 60px;
        }
        div:hover{
            border: #cd5ff8 2px solid;
            transform: scale(1.1); /* Increases size */
            box-shadow: 0 0 15px white;
        }
    }
    .parkify{
        height: 300px;
        margin-top: -80px;
        margin-bottom: -95px;
    }
    .mayoor{
        height: 200px;
        margin-bottom: -30px;
    }
`
export default Wrapper