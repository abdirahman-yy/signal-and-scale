import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterSection = styled.footer`
  background: white;
  padding: 4rem 0 2rem;
  border-top: 1px solid #e0e0e0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ContactLabel = styled.span`
  font-size: 0.8rem;
  color: #707070;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
  min-width: 60px;
  font-family: 'DM Sans', sans-serif;
`;

const EmailLink = styled.a`
  color: #0a0a0a;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  
  &:hover {
    color: #4a4a4a;
  }
`;

const SupportInfo = styled.div`
  font-size: 0.85rem;
  color: #707070;
  font-family: 'Inter', sans-serif;
`;

const LocationSection = styled.div`
  text-align: right;
  
  @media (max-width: 768px) {
    text-align: left;
  }
`;

const Location = styled.div`
  font-size: 0.9rem;
  color: #4a4a4a;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid #f0f0f0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.div`
  color: #707070;
  font-size: 0.8rem;
  font-family: 'Inter', sans-serif;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const LegalLink = styled(Link)`
  color: #707070;
  text-decoration: none;
  font-size: 0.8rem;
  transition: color 0.2s ease;
  font-family: 'Inter', sans-serif;
  
  &:hover {
    color: #0a0a0a;
  }
`;

const Disclaimer = styled.div`
  font-size: 0.75rem;
  color: #8a8a8a;
  text-align: center;
  margin-top: 1.5rem;
  font-style: italic;
  font-family: 'Inter', sans-serif;
`;

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterGrid>
          <ContactSection>
            <ContactItem>
              <ContactLabel>Founder:</ContactLabel>
              <EmailLink href="mailto:abdi@signalandscale.studio">
                abdi@signalandscale.studio
              </EmailLink>
            </ContactItem>
            <ContactItem>
              <ContactLabel>Sales:</ContactLabel>
              <EmailLink href="mailto:sales@signalandscale.studio">
                sales@signalandscale.studio
              </EmailLink>
            </ContactItem>
            <SupportInfo>Support: Mon–Fri, 9 AM–6 PM CT</SupportInfo>
          </ContactSection>
          
          <LocationSection>
            <Location>Minneapolis, MN</Location>
          </LocationSection>
        </FooterGrid>
        
        <FooterBottom>
          <Copyright>© 2025 Signal & Scale. All rights reserved.</Copyright>
          <LegalLinks>
            <LegalLink to="/tos">Terms of Service</LegalLink>
            <LegalLink to="/privacy">Privacy Policy</LegalLink>
          </LegalLinks>
        </FooterBottom>
        
        <Disclaimer>
          Performance is contingent on fair tests; we log all parity breaks.
        </Disclaimer>
      </Container>
    </FooterSection>
  );
};

export default Footer; 