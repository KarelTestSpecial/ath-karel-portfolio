import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import EditableImage from './EditableImage';

const Header = ({ profile = {} }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 py-6 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500/30">
            <EditableImage 
              src={profile.profile_image || 'https://via.placeholder.com/100'} 
              alt={profile.full_name}
              className="w-full h-full object-cover"
              dataKey="Profile"
              id={profile.full_name}
              field="profile_image"
            />
          </div>
          <div className="text-2xl font-black tracking-tighter uppercase italic text-white">
            {profile.full_name?.split(' ')[0] || 'Karel'}
            <span className="text-blue-500">.</span>
          </div>
        </div>
        
        <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.3em]">
          <a href="#services" className="hover:text-blue-500 transition-colors text-white no-underline">Services</a>
          <a href="#projects" className="hover:text-blue-500 transition-colors text-white no-underline">Work</a>
          <a href="#testimonials" className="hover:text-blue-500 transition-colors text-white no-underline">Client Space</a>
        </div>

        <div className="flex items-center gap-4">
          {/* Inquiry Count Button */}
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 bg-white/5 hover:bg-white/10 rounded-full transition-all group"
          >
            <span className="text-xl">📁</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          <a 
            href={`mailto:${profile.contact_email || ''}`}
            className="bg-white text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-white/5 no-underline"
          >
            Start Project
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
