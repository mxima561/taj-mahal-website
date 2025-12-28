import React from 'react';
import { MenuItem } from '../types';
import { X } from 'lucide-react';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose, items }) => {
  return (
    <div 
      className={`fixed inset-0 z-50 bg-taj-black transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="absolute top-0 right-0 p-6 z-20">
        <button 
          onClick={onClose}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
        >
          <X size={24} />
        </button>
      </div>

      <div className="h-full w-full flex items-center justify-center">
        <nav className="flex flex-col items-center gap-4 md:gap-6">
          {items.map((item, index) => (
            <a 
              key={index}
              href={item.href}
              onClick={onClose}
              className={`text-4xl md:text-6xl font-display font-bold uppercase text-white hover:text-taj-gold transition-all duration-300 transform ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.label}
            </a>
          ))}
          
          <div className="mt-12 flex gap-6 text-gray-400">
             <a href="#" className="hover:text-white transition-colors">EN</a>
             <span>/</span>
             <a href="#" className="hover:text-white transition-colors">AR</a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MenuOverlay;
