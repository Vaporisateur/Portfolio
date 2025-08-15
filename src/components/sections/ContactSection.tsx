import { ArrowUpRightIcon } from '../icons';

export const ContactSection = () => {
  return (
    <div className="py-12 md:pt-16 md:mt-2.5 lg:pt-24 lg:mt-3.5">
      <section className="container mx-auto px-6" id="contact">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-950 py-8 px-10 text-center md:text-left relative z-10 overflow-clip">
          <div 
            className="absolute inset-0 -z-10 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Créons quelque chose d'incroyable ensemble
              </h2>
              <p className="text-sm md:text-base mt-2">
                Prêt à donner vie à votre prochain projet ? Connectons-nous et discutons de la façon dont je peux vous aider à atteindre vos objectifs.
              </p>
            </div>
            <a href="mailto:contact@fabienastorg.com">
              <button className="bg-gray-900 text-white inline-flex items-center gap-2 px-6 h-12 rounded-xl w-max">
                <span className="font-semibold">Me Contacter</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
