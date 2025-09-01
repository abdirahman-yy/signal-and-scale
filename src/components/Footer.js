import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterSection = styled.footer`
  background: #fafafa;
  padding: 3rem 0;
  border-top: 1px solid #e0e0e0;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const EmailLink = styled.a`
  color: #0a0a0a;
  text-decoration: none;
  font-size: 1rem;
  letter-spacing: 0.01em;
  font-weight: 500;
  
  &:hover {
    color: #4a4a4a;
  }
`;

const ContactLabel = styled.span`
  font-size: 0.8rem;
  color: #707070;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-right: 0.5rem;
`;

const SupportHours = styled.div`
  font-size: 0.85rem;
  color: #707070;
  margin-top: 0.5rem;
`;

const LocationInfo = styled.div`
  text-align: right;
  
  @media (max-width: 768px) {
    text-align: left;
  }
`;

const Location = styled.div`
  font-size: 0.9rem;
  color: #4a4a4a;
  margin-bottom: 0.5rem;
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

const Copyright = styled.p`
  color: #707070;
  font-size: 0.85rem;
  letter-spacing: 0.02em;
  margin: 0;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const LegalLink = styled(Link)`
  color: #707070;
  text-decoration: none;
  font-size: 0.85rem;
  letter-spacing: 0.02em;
  transition: color 0.3s ease;
  
  &:hover {
    color: #0a0a0a;
  }
`;

const Disclaimer = styled.div`
  font-size: 0.75rem;
  color: #8a8a8a;
  text-align: center;
  margin-top: 1rem;
  font-style: italic;
`;

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterContent>
          <ContactInfo>
            <div>
              <ContactLabel>Founder:</ContactLabel>
              <EmailLink href="mailto:abdi@signalandscale.studio">
                abdi@signalandscale.studio
              </EmailLink>
            </div>
            <div>
              <ContactLabel>Sales:</ContactLabel>
              <EmailLink href="mailto:sales@signalandscale.studio">
                sales@signalandscale.studio
              </EmailLink>
            </div>
            <SupportHours>Support: Mon–Fri, 9 AM–6 PM CT</SupportHours>
          </ContactInfo>
          
          <LocationInfo>
            <Location>Minneapolis, MN</Location>
          </LocationInfo>
        </FooterContent>
        
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