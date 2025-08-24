import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = styled.section`
  background: white;
  padding: 6rem 0;
  
  @media (max-width: 480px) {
    padding: 4rem 0;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const TextContent = styled.div``;

const ImageContent = styled(motion.div)`
  position: relative;
  
  @media (max-width: 768px) {
    order: -1;
  }
`;

const SplashImage = styled.div`
  width: 100%;
  height: 450px;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, ${props => props.$isHovered ? '0.2' : '0.3'}) 0%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, ${props => props.$isHovered ? '0.1' : '0.2'}) 100%
  ),
  url('${process.env.PUBLIC_URL}/Image.png');
  background-size: cover;
  background-position: center;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  cursor: pointer;
  
  &:hover {
    border-color: #d0d0d0;
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
  }
  
  @media (max-width: 768px) {
    height: 350px;
  }
`;

const StatsBar = styled(motion.div)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, ${props => props.$isHovered ? '0.9' : '0.7'});
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.8rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  
  .value {
    font-size: 1.2rem;
    font-weight: 600;
    color: white;
    margin-bottom: 0.2rem;
    letter-spacing: -0.01em;
  }
  
  .label {
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.8);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  @media (max-width: 768px) {
    .value {
      font-size: 1rem;
    }
    
    .label {
      font-size: 0.65rem;
    }
  }
`;

const ImageOverlayContent = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 2rem;
  right: 2rem;
  z-index: 2;
  opacity: ${props => props.$isHovered ? '1' : '0.9'};
  transform: translateY(${props => props.$isHovered ? '0' : '5px'});
  transition: all 0.4s ease;
  
  @media (max-width: 768px) {
    bottom: 3rem;
    left: 1.5rem;
    right: 1.5rem;
  }
`;

const ContentSubtext = styled.div`
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.2rem;
  font-weight: 500;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
  max-width: 350px;
  line-height: 1.4;
  letter-spacing: -0.01em;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 280px;
  }
`;

const BottomOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 2rem 2rem 1.5rem;
  opacity: ${props => props.$isHovered ? '1' : '0.7'};
  transition: all 0.4s ease;
  
  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem 1rem;
  }
`;

const OverlayText = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  line-height: 1.5;
  
  strong {
    color: #0a0a0a;
    font-weight: 600;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  color: #0a0a0a;
  margin-bottom: 2rem;
  font-weight: 300;
  letter-spacing: -0.03em;
  line-height: 1.1;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.15rem;
  color: #4a4a4a;
  margin-bottom: 3rem;
  line-height: 1.6;
  letter-spacing: 0.01em;
  max-width: 500px;
  
  @media (max-width: 768px) {
    font-size: 1.05rem;
    margin-bottom: 2.5rem;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  background: #0a0a0a;
  color: white;
  border: 1px solid #0a0a0a;
  transition: all 0.3s ease;
  cursor: pointer;
  letter-spacing: 0.02em;
  
  &:hover {
    background: transparent;
    color: #0a0a0a;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    padding: 0.9rem 1.8rem;
    font-size: 0.95rem;
  }
`;

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Section ref={ref}>
      <Container>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <TextContent>
              <HeroTitle>
                Authentic video content that converts students into customers
              </HeroTitle>
              <HeroDescription>
                We create genuine, student-focused video content for EdTech platforms, including test-prep, tutoring, e-learning, and more. Our approach reduces customer acquisition costs while building trust with authentic student audiences.
              </HeroDescription>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <CTAButton 
                  href="https://calendly.com/signalandscale-sales/30min" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start a pilot program
                </CTAButton>
              </motion.div>
            </TextContent>
          </motion.div>
          
          <ImageContent
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <SplashImage
              $isHovered={isHovered}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <StatsBar
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                $isHovered={isHovered}
              >
                <StatItem>
                  <div className="value">20-30%</div>
                  <div className="label">CAC Reduction</div>
                </StatItem>
                <StatItem>
                  <div className="value">14 Days</div>
                  <div className="label">Timeline</div>
                </StatItem>
                <StatItem>
                  <div className="value">7-10</div>
                  <div className="label">UGC Videos</div>
                </StatItem>
              </StatsBar>
              
              <ImageOverlayContent $isHovered={isHovered}>
                <ContentSubtext>
                  Authentic experiences that drive results for EdTech companies
                </ContentSubtext>
              </ImageOverlayContent>
              
              <BottomOverlay $isHovered={isHovered}>
                <OverlayText>
                  <strong>Genuine student testimonials</strong><br />
                  Content that resonates with your target audience and drives conversions through relatable, trustworthy experiences
                </OverlayText>
              </BottomOverlay>
            </SplashImage>
          </ImageContent>
        </HeroContent>
      </Container>
    </Section>
  );
};

export default Hero; 