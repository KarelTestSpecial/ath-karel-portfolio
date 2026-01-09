import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import { useCart } from './CartContext';

export default function Projects({ projects = [] }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');
  const { addToCart } = useCart();

  if (!projects || projects.length === 0) return null;

  // Haal unieke categorieën op
  const categories = ['All', ...new Set(projects.map(p => p.category || p.type || 'Development'))];

  // Filter projecten
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => (p.category || p.type || 'Development') === filter);

  const handleInquire = (project) => {
    // We hergebruiken het cart systeem voor de offerte-aanvraag
    // We voegen een unieke ID toe op basis van de titel als die er niet is
    const item = {
      id: project.id || (project.title || project.name).toLowerCase().replace(/\s+/g, '-'),
      name: project.title || project.name,
      price: 0, // Geen prijs voor offerte-aanvraag
      image: project.image_url,
      category: project.category || project.type || 'Development',
      ...project
    };
    addToCart(item);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-32 bg-[#080808]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-blue-500 font-black uppercase tracking-[0.4em] text-xs mb-6">Selected Work</h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-white">
              Crafting Digital <br/> <span className="opacity-30 italic">Masterpieces.</span>
            </h3>
          </div>
          <div className="flex flex-col items-end gap-4">
            <div className="text-slate-500 font-bold uppercase tracking-widest text-sm border-b-2 border-blue-500 pb-2">
              {filteredProjects.length} {filter === 'All' ? 'Cases Total' : `${filter} Projects`}
            </div>
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 justify-end">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                    filter === cat 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white/5 text-slate-500 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col cursor-pointer animate-reveal"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Container */}
              <div className="aspect-[16/10] overflow-hidden rounded-3xl bg-slate-900 border border-white/5 relative mb-8">
                <img 
                  src={project.image_url || `https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop`} 
                  alt={project.title || project.name}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                   <span className="px-6 py-2 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full">
                     View Case Study
                   </span>
                </div>
              </div>

              {/* Info */}
              <div className="flex justify-between items-start px-2">
                <div>
                  <p className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-3">{project.category || project.type || "Development"}</p>
                  <h4 className="text-3xl font-black tracking-tight group-hover:text-blue-500 transition-colors text-white">{project.title || project.name}</h4>
                </div>
                <div className="text-slate-600 font-medium italic text-lg mt-1">
                  0{index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        onInquire={handleInquire}
      />
    </section>
  );
}
