export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-700 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          À Propos de Moi
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-full h-80 bg-gray-600 rounded-lg mb-6"></div>
          </div>
          <div className="text-white">
            <h3 className="text-2xl font-semibold mb-4">Mon Parcours</h3>
            <p className="text-gray-300 mb-6">
              Passionné par le développement web depuis plusieurs années, je me spécialise 
              dans la création d'applications modernes et performantes.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Frontend</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Backend</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
