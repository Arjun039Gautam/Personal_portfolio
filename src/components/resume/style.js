import styled from "styled-components";

const Wrapper = styled.section`
    img{
        height: 150vh;
        margin: 200px auto;
        display: flex;
        box-shadow: 0 2px 6px rgba(205, 95, 248, 0.4);
    }

    @media (max-width: 600px) {
    margin-top: 60px;

    img {
      max-width: 95%;
      height: auto;
      box-shadow: 0 2px 6px rgba(205, 95, 248, 0.4);
    }
  }
`
export default Wrapper