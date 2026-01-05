import React from 'react';

export default function Projects({ projects }) {
  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Featured Projects</h2>
            <p className="text-gray-500">A selection of my recent work.</p>
          </div>
          <button className="hidden md:block text-blue-600 font-medium hover:underline">
            View All &rarr;
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <article key={index} className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-colors">
              {/* Image Placeholder */}
              <div className="aspect-video bg-gray-200 w-full overflow-hidden relative">
                 {/* In a real app, this would be an <img> tag */}
                 <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100 group-hover:scale-105 transition-transform duration-500">
                    <span className="text-sm font-mono">{project.image_prompt ? "AI Image" : "Project Preview"}</span>
                 </div>
                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm">
                   {project.category}
                 </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.summary}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech_stack && project.tech_stack.split(',').map((tech, i) => (
                    <span key={i} className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.demo_url && (
                    <a href={project.demo_url} className="text-sm font-bold text-gray-900 border-b-2 border-transparent hover:border-black transition-all">
                      Live Demo
                    </a>
                  )}
                  {project.repo_url && (
                    <a href={project.repo_url} className="text-sm font-bold text-gray-500 hover:text-gray-900">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
