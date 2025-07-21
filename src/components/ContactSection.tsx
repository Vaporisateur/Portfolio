export const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Contact
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-8">
            <div className="text-center mb-8">
              <p className="text-gray-300 mb-6">
                Vous avez un projet en tête ? N'hésitez pas à me contacter !
              </p>
            </div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Nom
                </label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
