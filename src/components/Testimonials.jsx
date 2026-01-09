import React from 'react';

export default function Testimonials({ testimonials = [] }) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-primary font-black uppercase tracking-[0.4em] text-xs mb-20">Kind Words</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((t, index) => (
            <div key={index} className="glass p-12 rounded-[40px] relative overflow-hidden group">
              <span className="text-8xl absolute -top-4 -left-4 opacity-5 font-black text-white">"</span>
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 relative z-10">
                {t.quote || t.content || t.tekst}
              </p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-black text-primary uppercase">
                  {t.name?.[0] || 'C'}
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-tight text-white">{t.name || t.client}</h4>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t.role || t.functie || 'Client'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}