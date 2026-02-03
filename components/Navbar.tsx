import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
        <div className={`relative rounded-full transition-all duration-300 ${scrolled ? 'glass-panel shadow-lg' : 'bg-transparent'} px-6 py-3 flex items-center justify-between`}>
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
              <span className="text-brand-dark font-bold text-xl">B</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-ink">Befinitive</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-ink-soft hover:text-ink transition-colors">About</button>
            <button onClick={() => scrollToSection('products')} className="text-sm font-medium text-ink-soft hover:text-ink transition-colors">Products</button>
            <button onClick={() => scrollToSection('partners')} className="text-sm font-medium text-ink-soft hover:text-ink transition-colors">Partners</button>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
             <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand hover:bg-opacity-90 transition-colors text-brand-dark font-semibold text-sm">
              <MessageCircle size={16} />
              <span>Chat</span>
            </a>
            <a href="#contact" onClick={() => scrollToSection('contact')} className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-2 text-ink hover:bg-surface-3 border border-white/10 transition-colors font-medium text-sm">
              <Phone size={16} />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-ink" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 p-4 md:hidden">
          <div className="bg-surface-2 rounded-2xl shadow-xl p-6 flex flex-col gap-4 border border-white/10">
            <button onClick={() => scrollToSection('about')} className="text-lg font-medium text-left text-ink">About</button>
            <button onClick={() => scrollToSection('products')} className="text-lg font-medium text-left text-ink">Products</button>
            <button onClick={() => scrollToSection('partners')} className="text-lg font-medium text-left text-ink">Partners</button>
            <hr className="border-white/10" />
            <a href="#contact" onClick={() => scrollToSection('contact')} className="w-full text-center py-3 bg-brand text-brand-dark rounded-xl font-medium">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
