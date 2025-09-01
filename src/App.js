import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import FairTest from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import './App.css';

const AppContainer = styled.div`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #ffffff;
  min-height: 100vh;
`;

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
  
  return null;
};

const HomePage = () => (
  <>
    <Header />
    <Hero />
    <ProblemSolution />
    <FairTest />
    <Testimonials />
    <FinalCTA />
    <Footer />
  </>
);

function App() {
  return (
    <Router basename={process.env.NODE_ENV === 'production' ? '' : ''}>
      <AppContainer>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/tos" element={<TermsOfService />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
