import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import { theme } from './theme';
import './App.css';

const Shell = styled.div`
  width: 100%;
  max-width: ${theme.contentMax};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${theme.pagePadding};
  padding-right: ${theme.pagePadding};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [location.pathname]);
  return null;
};

const HomePage = () => (
  <>
    <Header />
    <main>
      <Hero />
      <WhatWeDo />
      <HowItWorks />
      <Pricing />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Shell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/tos" element={<TermsOfService />} />
        </Routes>
      </Shell>
    </Router>
  );
}

export default App;
