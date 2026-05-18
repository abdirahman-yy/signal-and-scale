import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../theme';

const FooterSection = styled.footer`
  padding: 7rem 0 3rem;

  @media (max-width: 640px) {
    padding: 4.5rem 0 2.5rem;
  }
`;

const Rule = styled.div`
  height: 1px;
  background: ${theme.rule};
  margin-bottom: 2rem;
`;

const BrandBlock = styled.div`
  margin-bottom: 1.5rem;
`;

const BrandLockup = styled.img`
  display: block;
  height: 46px;
  width: auto;
  margin-bottom: 0.7rem;

  @media (max-width: 640px) {
    height: 38px;
  }
`;

const Tagline = styled.div`
  font-family: ${theme.sans};
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${theme.textMuted};
  font-weight: 500;
`;

const Line = styled.div`
  font-size: 0.95rem;
  color: ${theme.textMuted};
  margin-bottom: 0.4rem;
  line-height: 1.5;
`;

const EmailLink = styled.a`
  color: ${theme.textMuted};

  &:hover {
    color: ${theme.accent};
    text-decoration: none;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 1.75rem;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Copy = styled.div`
  font-size: 0.85rem;
  color: ${theme.textMuted};
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 1.25rem;
`;

const LegalLink = styled(Link)`
  font-size: 0.85rem;
  color: ${theme.textMuted};

  &:hover {
    color: ${theme.text};
    text-decoration: none;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <Rule />
      <BrandBlock>
        <BrandLockup
          src={`${process.env.PUBLIC_URL}/assets/brand/signal-scale-email.png`}
          alt="Signal & Scale"
        />
        <Tagline>Influencer Marketing Studio</Tagline>
      </BrandBlock>
      <Line>
        <EmailLink href="mailto:abdi@signalandscale.studio">
          abdi@signalandscale.studio
        </EmailLink>
        {' · '}San Francisco, CA
      </Line>
      <Bottom>
        <Copy>© 2026 Signal &amp; Scale</Copy>
        <LegalLinks>
          <LegalLink to="/tos">Terms</LegalLink>
          <LegalLink to="/privacy">Privacy</LegalLink>
        </LegalLinks>
      </Bottom>
    </FooterSection>
  );
};

export default Footer;
