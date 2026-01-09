import React from 'react';

export default function Services({ services = [] }) {
  if (!services || services.length === 0) return null;

  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-primary font-black uppercase tracking-[0.4em] text-xs mb-20">My Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/10 border border-white/10 rounded-[40px] overflow-hidden">
          {services.map((service, index) => (
            <div key={index} className="bg-[#050505] p-12 hover:bg-white/5 transition-all duration-500 group">
              <span className="text-4xl mb-8 block grayscale group-hover:grayscale-0 transition-all">{service.icon || "⚡"}</span>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">{service.title}</h3>
              <p className="text-slate-400 font-medium leading-relaxed mb-8">
                {service.description}
              </p>
              <ul className="space-y-3">
                {(service.tags || "").split(',').map((tag, i) => (
                  <li key={i} className="text-[10px] font-black uppercase tracking-widest text-slate-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> {tag.trim()}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}