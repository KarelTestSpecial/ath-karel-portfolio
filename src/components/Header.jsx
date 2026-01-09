import React, { useState, useEffect } from 'react';

const Header = ({ profile = {} }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 py-6 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter uppercase italic">
          {profile.full_name?.split(' ')[0] || 'Karel'}
          <span className="text-primary">.</span>
        </div>
        
        <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.3em]">
          <a href="#services" className="hover:text-primary transition-colors text-white no-underline">Services</a>
          <a href="#projects" className="hover:text-primary transition-colors text-white no-underline">Work</a>
          <a href="#testimonials" className="hover:text-primary transition-colors text-white no-underline">Client Space</a>
        </div>

        <a 
          href={`mailto:${profile.contact_email || ''}`}
          className="bg-white text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-xl shadow-white/5 no-underline"
        >
          Start Project
        </a>
      </div>
    </nav>
  );
};

export default Header;