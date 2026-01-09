import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CartOverlay from './components/CartOverlay';

const App = ({ data }) => {
  if (!data) return <div className="min-h-screen flex items-center justify-center font-black uppercase tracking-[0.5em]">Loading Athena...</div>;

  const profile = data['Profile']?.[0] || data['Basisgegevens']?.[0] || {};
  const projects = data['Tabel'] || data['Projects'] || data['Portfolio'] || [];
  const services = data['Services'] || [];
  const testimonials = data['Testimonials'] || [];

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <Header profile={profile} />
      <CartOverlay />
      
      <main>
        <Hero profile={profile} />
        <Services services={services} />
        <Projects projects={projects} />
        <Testimonials testimonials={testimonials} />
      </main>

      <Footer profile={profile} />
    </div>
  );
};

export default App;