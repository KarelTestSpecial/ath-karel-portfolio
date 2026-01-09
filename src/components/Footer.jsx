import React from 'react';

export default function Footer({ profile = {} }) {
  return (
    <footer className="bg-black py-32 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-20">
          <div>
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-none">
              Let's build <br/> <span className="text-primary italic">together.</span>
            </h3>
            <p className="text-slate-500 text-xl font-medium max-w-sm mb-10">
              Heb je een idee of een project dat tot leven moet komen? Ik help je graag.
            </p>
            <a 
              href={`mailto:${profile.contact_email || ''}`}
              className="text-2xl font-black border-b-4 border-primary pb-2 hover:text-primary transition-all"
            >
              {profile.contact_email || 'hello@athena.com'}
            </a>
          </div>
          
          <div className="flex flex-col justify-end items-start md:items-end">
            <div className="text-right space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 mb-6">Social Discovery</p>
              <a href="#" className="block text-2xl font-black hover:text-primary transition-all uppercase italic">LinkedIn</a>
              <a href="#" className="block text-2xl font-black hover:text-primary transition-all uppercase italic">GitHub</a>
              <a href="#" className="block text-2xl font-black hover:text-primary transition-all uppercase italic">X (Twitter)</a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between gap-6">
          <p className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} — ATHENA PREMIUM PORTFOLIO
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-slate-700 uppercase tracking-widest">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}