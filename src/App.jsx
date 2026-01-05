import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App({ data }) {
  // Data veilig ophalen (met fallbacks)
  const profile = data.Profile ? data.Profile[0] : {};
  const projects = data.Projects || [];
  const services = data.Services || [];
  const testimonials = data.Testimonials || [];
  const socials = data.Socials || [];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Header profile={profile} />
      
      <main>
        <Hero profile={profile} />
        <Services services={services} />
        <Projects projects={projects} />
        <Testimonials testimonials={testimonials} />
      </main>

      <Footer profile={profile} socials={socials} />
    </div>
  );
}

export default App;