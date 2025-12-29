import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import MenuOverlay from './MenuOverlay';
import { MENU_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 px-4 py-4 md:px-8 md:py-6 flex justify-between items-center pointer-events-none`}>
        {/* Logo */}
        <div className={`pointer-events-auto transition-opacity duration-300 ${isScrolled ? 'opacity-0 md:opacity-100' : 'opacity-100'}`}>
          <Link to="/" className="block">
            <div className="font-display font-bold text-2xl md:text-3xl tracking-tighter text-white bg-taj-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              TAJ MAHAL
            </div>
          </Link>
        </div>

        {/* Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="pointer-events-auto group flex items-center gap-3 bg-white text-taj-black px-5 py-2.5 rounded-full font-medium text-sm uppercase tracking-wide hover:bg-taj-gold transition-colors duration-300 shadow-lg"
        >
          <span className="hidden md:block">Menu</span>
          <Menu size={18} />
        </button>
      </header>

      <MenuOverlay 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        items={MENU_ITEMS}
      />
    </>
  );
};

export default Header;
