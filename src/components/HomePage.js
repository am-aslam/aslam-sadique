import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Publications from './Publications';
import Testimonials from './Testimonials';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import NeuralBackground from './NeuralBackground';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for 3D elements
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <div className="loading-text">Initializing Neural Networks...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="homepage">
      <NeuralBackground />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Publications />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;