import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoTicker from './components/LogoTicker';
import BentoGrid from './components/BentoGrid';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-brand-dark selection:bg-brand selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <LogoTicker />
        <BentoGrid />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;