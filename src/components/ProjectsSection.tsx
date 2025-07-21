export const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Mes Projets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <div key={project} className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors">
              <div className="h-48 bg-gray-600 rounded mb-4"></div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Projet {project}
              </h3>
              <p className="text-gray-300 mb-4">
                Description du projet avec les technologies utilisées.
              </p>
              <div className="flex gap-2">
                <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">React</span>
                <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">Node.js</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
