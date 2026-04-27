import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import InquiryModal from './InquiryModal';

const Section = styled.section`
  padding: 6rem 0 0;

  @media (max-width: 640px) {
    padding: 4rem 0 0;
  }
`;

const Headline = styled.h1`
  font-family: ${theme.serif};
  font-weight: 400;
  font-size: 4rem;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: ${theme.text};
  margin: 0 0 1.5rem;
  font-variation-settings: 'opsz' 144;

  @media (max-width: 640px) {
    font-size: 2.75rem;
    line-height: 1.08;
  }
`;

const Subhead = styled.p`
  font-size: 1.35rem;
  line-height: 1.5;
  color: ${theme.textMuted};
  margin: 0 0 2.5rem;
  max-width: 36rem;

  @media (max-width: 640px) {
    font-size: 1.15rem;
    margin-bottom: 2rem;
  }
`;

const CTAButton = styled.button`
  display: inline-block;
  background: ${theme.accent};
  color: ${theme.bg};
  border: none;
  border-radius: 4px;
  padding: 0.85rem 1.5rem;
  font-family: ${theme.sans};
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: ${theme.accentHover};
  }

  &:focus-visible {
    outline: 2px solid ${theme.accent};
    outline-offset: 3px;
  }
`;

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Section>
        <Headline>
          Influencer marketing for productivity &amp; SaaS brands.
        </Headline>
        <Subhead>
          We connect your product with the creators your customers already trust.
        </Subhead>
        <CTAButton onClick={() => setOpen(true)}>Start an inquiry</CTAButton>
      </Section>
      <InquiryModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Hero;
