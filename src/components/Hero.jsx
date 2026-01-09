import React from 'react';
import EditableImage from './EditableImage';

export default function Hero({ profile = {} }) {
  const { 
    full_name = "Creator", 
    tagline = "Designing Digital Experiences", 
    bio_short, 
    cta_text = "Let's Talk",
    contact_email,
    profile_image
  } = profile;

  // Helper voor slimme URL afhandeling
  const getImageUrl = (url) => {
    if (!url) return "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
    if (url.startsWith('http')) return url;
    // Zoek in images/ map
    return `${import.meta.env.BASE_URL}images/${url}`;
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Content Left */}
          <div className="flex-1 text-center lg:text-left animate-reveal">
            <h2 className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4">Available for projects</h2>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">{full_name.split(' ')[0]}</span>.
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-medium mb-10 max-w-xl leading-relaxed">
              {tagline}
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <a 
                href="#projects" 
                className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-xs rounded-full hover:bg-primary hover:text-white transition-all duration-500 shadow-xl shadow-white/5"
              >
                Explore Work
              </a>
              {contact_email && (
                <a 
                  href={`mailto:${contact_email}`} 
                  className="px-10 py-5 border-2 border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-white/5 transition-all"
                >
                  {cta_text}
                </a>
              )}
            </div>
          </div>

          {/* Image Right */}
          <div className="flex-1 relative animate-reveal [animation-delay:200ms]">
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* Decorative rings */}
              <div className="absolute inset-0 border-2 border-white/5 rounded-full scale-110"></div>
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full scale-125 animate-ping [animation-duration:4s]"></div>
              
              <div className="w-full h-full rounded-full overflow-hidden border-8 border-white/5 shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700">
                <EditableImage 
                  src={getImageUrl(profile_image)} 
                  alt={full_name}
                  className="w-full h-full object-cover"
                  cmsBind={{ file: "profile", key: "profile_image", index: 0 }}
                />
              </div>

              {/* Stats Badge */}
              <div className="absolute -bottom-4 -right-4 glass px-6 py-4 rounded-2xl z-20 shadow-xl border-white/20">
                <p className="text-xs font-black uppercase tracking-widest text-primary mb-1">Experience</p>
                <p className="text-2xl font-black italic">5+ Years</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
