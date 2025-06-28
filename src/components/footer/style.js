// style.js
import styled from 'styled-components';

const Wrapper = styled.footer`
  width: 100%;
  padding: 10px 20px;
  position: fixed;
  bottom: 0;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
  color: #aaa;
  font-size: 14px;
  display: flex;
  justify-content: center;
  z-index: 999;

  .footer-content {
    width: 100%;
    max-width: 1200px;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export default Wrapper;
