import React from 'react';

export default function Hero({ profile }) {
  const { 
    full_name = "Creator", 
    tagline = "Designing the Future", 
    bio_short, 
    cta_text = "Get in Touch",
    contact_email
  } = profile;

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          {full_name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6 font-light max-w-2xl mx-auto">
          {tagline}
        </p>
        {bio_short && (
          <p className="text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
            {bio_short}
          </p>
        )}
        
        <div className="flex justify-center gap-4">
          <a 
            href="#projects" 
            className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-100 transition-transform transform hover:scale-105 shadow-lg"
          >
            View Work
          </a>
          {contact_email && (
            <a 
              href={`mailto:${contact_email}`} 
              className="px-8 py-3 rounded-full border border-gray-600 text-white font-medium hover:bg-gray-800 transition-colors"
            >
              {cta_text || "Get in Touch"}
            </a>
          )}
        </div>
      </div>
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600 rounded-full blur-3xl filter"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600 rounded-full blur-3xl filter"></div>
      </div>
    </section>
  );
}
