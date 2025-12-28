import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-taj-dark text-white py-12 md:py-20 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="flex flex-col gap-6">
            <h3 className="font-display text-2xl font-bold uppercase">Stay Updated</h3>
            <p className="text-gray-400 max-w-sm">
              Sign up now to receive pre-sale access, exclusive invites, and 20% off merchandise.
            </p>
            <div className="flex gap-2 max-w-md">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-white/5 border border-white/10 px-4 py-3 rounded-lg flex-grow text-sm focus:outline-none focus:border-taj-gold transition-colors"
              />
              <button className="bg-taj-gold text-black font-bold uppercase text-sm px-6 py-3 rounded-lg hover:bg-white transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:gap-12 text-sm text-gray-400">
            <div>
              <h4 className="text-white font-bold uppercase mb-4">Explore</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-taj-gold transition-colors">Events Calendar</a></li>
                <li><a href="#" className="hover:text-taj-gold transition-colors">VIP Experience</a></li>
                <li><a href="#" className="hover:text-taj-gold transition-colors">Gallery</a></li>
                <li><a href="#" className="hover:text-taj-gold transition-colors">Store</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.platform} 
                href={link.url}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-taj-gold hover:text-black transition-all"
                aria-label={link.platform}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <div className="text-xs text-gray-500 uppercase tracking-wide">
            © 2025 Taj Mahal Sharm. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
