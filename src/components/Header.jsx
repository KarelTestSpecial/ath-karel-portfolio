import React, { useState, useEffect } from 'react';

export default function Header({ profile }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-md py-3 shadow-sm' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`text-xl font-bold tracking-tighter transition-colors ${
          scrolled ? 'text-black' : 'text-white'
        }`}>
          {profile.full_name ? profile.full_name.split(' ')[0] : 'Portfolio'}.
        </a>
        
        <nav className="flex items-center gap-8">
          <a href="#projects" className={`text-sm font-medium transition-colors ${
            scrolled ? 'text-gray-600 hover:text-black' : 'text-gray-300 hover:text-white'
          }`}>
            Work
          </a>
          {profile.contact_email && (
            <a 
              href={`mailto:${profile.contact_email}`} 
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                scrolled 
                  ? 'bg-black text-white hover:bg-gray-800' 
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              Hire Me
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}