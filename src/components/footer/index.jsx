import Wrapper from './style';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Wrapper>
      <div className="footer-content">
        <p>© {year} Arjun Gautam. All rights reserved.</p>
      </div>
    </Wrapper>
  );
};

export default Footer;
