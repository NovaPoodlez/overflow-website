import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import HowItWorksPage from './pages/HowItWorksPage.jsx';
import FeasibilityStudyPage from './pages/FeasibilityStudyPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/feasibility-study" element={<FeasibilityStudyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center bg-background">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4 text-foreground">404 - Page not found</h1>
                <p className="text-muted-foreground mb-6">The page you're looking for doesn't exist.</p>
                <a href="/" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200">
                  Back to home
                </a>
              </div>
            </div>
          } />
        </Routes>
        <Toaster />
      </Router>
    </ThemeProvider>
  );
}

export default App;