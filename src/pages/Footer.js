import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const Header = styled.header`
  background-color: #6C3AD0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background-color: ${props => (props.primary ? 'white' : '#6C3AD0')};
  color: ${props => (props.primary ? '#6C3AD0' : 'white')};
  padding: 10px 20px;
  border: ${props => (props.primary ? '1px solid #6C3AD0' : 'none')};
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;

  &:hover {
    background-color: ${props => (props.primary ? '#f0f0f0' : '#5930a0')};
  }
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #6C3AD0;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 18px;
  color: #333;
  max-width: 800px;
  text-align: center;
  margin-bottom: 40px;
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Image = styled.img`
  width: 200px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Footer = styled.footer`
  background-color: orange;
  color: white;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 10px 20px;
`;

const FooterTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  display: block;
  margin-bottom: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIcon = styled.a`
  color: white;
  text-decoration: none;
  font-size: 24px;
  margin-right: 15px;

  &:hover {
    color: #f0f0f0;
  }
`;

const FooterComponent = () => {
  return (
    <Container >
      <Footer>
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink href="#">Home</FooterLink>
          <FooterLink href="#">Features</FooterLink>
          <FooterLink href="#">Pricing</FooterLink>
          <FooterLink href="#">About</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Contact Us</FooterTitle>
          <FooterLink href="#">Email: support@resumo.com</FooterLink>
          <FooterLink href="#">Phone: (123) 456-7890</FooterLink>
          <FooterLink href="#">Address: 123 Main St, Anytown, USA</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Follow Us</FooterTitle>
          
          <SocialIcons>
            <SocialIcon href="" className="fab fa-facebook-f"></SocialIcon>
            
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path fill="currentColor" d="M19 3H5c-1.656 0-3 1.344-3 3v14c0 1.656 1.344 3 3 3h7v-8H8V9h4V7c0-2.219 1.781-4 4-4h3v3h-3c-.563 0-1 .437-1 1v2h4.469l-.938 3H15v8h4c1.656 0 3-1.344 3-3V6c0-1.656-1.344-3-3-3z"/>
  </svg>


            <SocialIcon href="#" className="fab fa-twitter"></SocialIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path fill="currentColor" d="M23.954 4.569c-.885.391-1.83.656-2.826.776 1.016-.609 1.8-1.574 2.165-2.723-.951.56-2.006.969-3.128 1.191-.898-.963-2.18-1.561-3.602-1.561-2.728 0-4.936 2.209-4.936 4.936 0 .387.044.763.127 1.123-4.106-.206-7.747-2.165-10.183-5.14-.425.719-.668 1.554-.668 2.446 0 1.7.865 3.193 2.176 4.07-.8-.025-1.554-.246-2.214-.613v.061c0 2.375 1.688 4.354 3.937 4.798-.412.111-.845.17-1.291.17-.314 0-.62-.03-.922-.086.624 1.944 2.426 3.366 4.558 3.404-1.671 1.306-3.782 2.089-6.065 2.089-.393 0-.78-.023-1.162-.068 2.154 1.382 4.71 2.187 7.473 2.187 8.968 0 13.877-7.441 13.877-13.876 0-.211-.005-.422-.014-.633.956-.691 1.786-1.556 2.444-2.541z"/>
  </svg>
            <SocialIcon href="#" className="fab fa-linkedin-in"></SocialIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path fill="currentColor" d="M12 3.37c-3.04 0-3.415.013-4.61.067-1.193.055-1.97.24-2.67.512a5.08 5.08 0 0 0-1.95 1.22 5.08 5.08 0 0 0-1.22 1.95c-.272.7-.457 1.476-.512 2.67C1.013 8.584 1 8.96 1 12s.013 3.415.067 4.61c.055 1.193.24 1.97.512 2.67.28.725.675 1.32 1.22 1.95.545.63 1.24 1.117 1.95 1.22.7.272 1.476.457 2.67.512 1.195.055 1.57.067 4.61.067s3.415-.013 4.61-.067c1.193-.055 1.97-.24 2.67-.512a5.08 5.08 0 0 0 1.95-1.22 5.08 5.08 0 0 0 1.22-1.95c.272-.7.457-1.476.512-2.67.055-1.195.067-1.57.067-4.61s-.013-3.415-.067-4.61c-.055-1.193-.24-1.97-.512-2.67a5.08 5.08 0 0 0-1.22-1.95 5.08 5.08 0 0 0-1.95-1.22c-.7-.272-1.476-.457-2.67-.512C15.415 1.013 15.04 1 12 1zm0 1.793c2.932 0 3.26.01 4.407.064 1.072.05 1.655.228 2.042.38.486.187.84.405 1.22.784.379.379.597.733.784 1.22.152.387.33.97.38 2.042.054 1.148.064 1.475.064 4.407 0 2.932-.01 3.26-.064 4.407-.05 1.072-.228 1.655-.38 2.042-.187.486-.405.84-.784 1.22-.379.379-.733.597-1.22.784-.387.152-.97.33-2.042.38-1.148.054-1.475.064-4.407.064-2.932 0-3.26-.01-4.407-.064-1.072-.05-1.655-.228-2.042-.38-.486-.187-.84-.405-1.22-.784-.379-.379-.597-.733-.784-1.22-.152-.387-.33-.97-.38-2.042-.054-1.148-.064-1.475-.064-4.407 0-2.932.01-3.26.064-4.407.05-1.072.228-1.655.38-2.042.187-.486.405-.84.784-1.22.379-.379.733-.597 1.22-.784.387-.152.97-.33 2.042-.38 1.148-.054 1.475-.064 4.407-.064z"/>
    <path fill="currentColor" d="M12 6.938c-3.528 0-5.062 1.534-5.062 5.062s1.534 5.062 5.062 5.062 5.062-1.534 5.062-5.062-1.534-5.062-5.062-5.062zm0 8.124c-1.68 0-3.062-1.38-3.062-3.062S10.32 8.938 12 8.938s3.062 1.38 3.062 3.062-1.38 3.062-3.062 3.062z"/>
    <circle cx="18.406" cy="5.594" r="1.063" fill="currentColor"/>
  </svg>

            <SocialIcon href="#" className="fab fa-instagram"></SocialIcon>
            
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5zm3.891 15.5H7.595V10.831h1.296v7.669zm-.648-8.369a1.426 1.426 0 1 1 .001-2.85 1.426 1.426 0 0 1-.001 2.85zm10.162 8.369h-1.295v-4.336c0-.574-.011-1.313-.799-1.313-.799 0-.92.624-.92 1.27v4.378h-1.295V10.83h1.275v1.697h.018c.178-.337.486-.689 1.258-.689 1.344 0 1.59.884 1.59 2.034v4.472zM10.469 7.892a1.598 1.598 0 1 0-.001-3.196 1.598 1.598 0 0 0 .001 3.196z"/>
  </svg>

          </SocialIcons>
        </FooterSection>
      </Footer>
    </Container>
  );
};

export default FooterComponent;
